import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Form.css';

function Signup() {
  const navigate = useNavigate()
  const [signinData, setSigninData] = useState({ email: "", username: "", password: "", re_password: "" })
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://127.0.0.1:8000/api/auth/users/`,
      {
        email: signinData.email,
        username: signinData.username,
        password: signinData.password,
        re_password: signinData.re_password,
      },)
      .then((response) => {
        navigate('/signin');
      })
      .catch(err => {
        alert("ユーザー登録に失敗しました");
      })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setSigninData((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className="contents-box">
      <div className="from-box">
        <div className="glass">
          <form onSubmit={handleSubmit}>
            <label>メールアドレス</label>
            <input className='form-control' id="loginEmail" type="email" name="email" value={signinData.email} onChange={handleChange} required />
            <label>ユーザー名</label>
            <input className='form-control' id="loginUserName" type="text" name="username" value={signinData.username} onChange={handleChange} required />
            <label>パスワード</label>
            <input className='form-control' id="loginPassword" type="password" name="password" value={signinData.password} onChange={handleChange} required />
            <label>パスワード（再入力）</label>
            <input className='form-control' id="loginRePassword" type="password" name="re_password" value={signinData.re_password} onChange={handleChange} required />
            <input className='login-button' type="submit" value="登録" />
          </form>
          <div className="other-text">
            ログインは<Link to={`/signin`}>こちら</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;