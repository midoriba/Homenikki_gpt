import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import './Contents.css';

function Contents() {
  const [items, setItems] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [referedPost, setReferedPost] = useState({
    summary: "",
    praise: ""
  })
  const [cookies] = useCookies()
  const navigate = useNavigate()
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/auth/jwt/verify', {
      token: cookies.accesstoken,
    }).then(res => {
      console.log("ログイン済み");
    })
      .catch(err => {
        if (err.response.status === 401) {
          navigate('/signin')
          console.log("ログイン必要")
        }
      })
  })
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/diary/', { headers: { Authorization: `JWT ${cookies.accesstoken}` } })
      .then(res => {
        setItems(res.data)
      })
  }, [referedPost])
  const messagewindow = showMessage ? (<Homessage praise={referedPost.praise} setShowMessage={setShowMessage} />) : null
  return (
    <div>
      <PostForm setReferedPost={setReferedPost} setShowMessage={setShowMessage} />
      <DiaryList data={items} />
      {messagewindow}
    </div>
  )
}

function PostForm(props) {
  const [summary, setSummary] = useState('')
  const [detail, setDetail] = useState('')
  const [cookies] = useCookies()
  const handleSummaryChange = (event) => {
    setSummary(event.target.value)
  }
  const handleDetailChange = (event) => {
    setDetail(event.target.value)
  }
  const postDiary = (event) => {
    event.preventDefault()
    console.log(cookies.accesstoken)
    axios.post('http://127.0.0.1:8000/api/diary/', {
      summary: summary,
      detail: detail,
    }, { headers: { Authorization: `JWT ${cookies.accesstoken}` }, })
      .then(res => {
        props.setReferedPost(res.data)
        props.setShowMessage(true)
        setSummary('')
        setDetail('')
        synthesizeSpeech(res.data.praise)
      });
  }
  return (
    <div>
      <div className="from-box">
        <div className="glass">
          <form onSubmit={postDiary}>
            <label className="form-text">今日あったことを一言で</label>
            <input className="form-control" type="text" name="summary" value={summary} placeholder="例）悪の組織を壊滅させた" required="required" onChange={handleSummaryChange} />
            <label className="form-text">詳細（任意）</label>
            <textarea className="form-control" name="detail" value={detail} placeholder="例）近所の悪の組織を懲らしめた。感謝されて嬉しかった。" onChange={handleDetailChange} />
            <button className="send-button" type="submit">送信</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function DiaryList({ data }) {
  return (
    <div className="m-4">
      {data.map((item, key) =>
        <DiaryCard summary={item.summary} detail={item.detail} praise={item.praise} date={item.date_created} key={item.date_created} />
      )}
    </div>
  )
}

function DiaryCard({ summary, detail, praise }) {
  return (
    <>
      <div className="cards">
        <div className='card'>
          <div className="card-header h4 bg-info text-white">{summary}</div>
          {detail ? (<div className="card-body">{detail}</div>) : null}
          <div className="card-footer">{praise}</div>
        </div>
      </div>
    </>
  )
}

function synthesizeSpeech(text) {
  const uttr = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(uttr)
}

function Homessage(props) {
  const [message, setMessage] = useState("")
  useEffect(() => { // 一文字ずつstateに追加
    const lenpraise = props.praise.length
    let count = 0
    const intervalId = setInterval(() => {
      setMessage(props.praise.substr(0, count))
      count++
      if (count > lenpraise) {
        clearInterval(intervalId)
      }
    }, 100)
  }, [props.praise])
  const closeMessage = () => {
    setMessage("")
    props.setShowMessage(false)
  }
  return (
    <>
      <div className='overlay'>
        <div className='homessage'>
          <ul class="checkmark">
            <li></li>
          </ul>
          <div className='note-box'>
            <p>{message}</p>
            <button className='homessage-button' type="button" onClick={closeMessage}>とじる</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contents;