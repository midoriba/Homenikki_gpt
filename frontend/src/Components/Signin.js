import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Form.css';

function Signin() {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies()
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(loginData)
    await axios.post(`http://127.0.0.1:8000/api/auth/jwt/create/`,
      {
        email: loginData.email,
        password: loginData.password,
      },)
      .then((response) => {
        setCookie('accesstoken', response.data.access, { path: '/' }, { httpOnly: true });
        setCookie('refreshtoken', response.data.refresh, { path: '/' }, { httpOnly: true });
        navigate('/contents');
      })
      .catch(err => {
        alert("メールアドレスまたはパスワードが誤っています");
      })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <>
      <div className="from-box">
        <div className="glass">
          <form onSubmit={handleSubmit}>
            <label>メールアドレス</label>
            <input className='form-control' id="loginEmail" type="email" name="email" value={loginData.email} onChange={handleChange} required />
            <label>パスワード</label>
            <input className='form-control' id="loginPassword" type="password" name="password" value={loginData.password} onChange={handleChange} required />
            <input className='login-button' type="submit" value="ログイン" />
          </form>
          <div className="other-text">
            新規登録は<Link to={`/signup/`}>こちら</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin;