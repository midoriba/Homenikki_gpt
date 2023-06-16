import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Form.css';
import Entrance from "./Entrance"
import Signin from "./Signin"
import Signup from "./Signup"

function DefaultPage() {
  return (
    <>
        <header className="App-header">
            <h1 className="text-white display-4">ほめ日記</h1>
            <hr />
            <p className="m-0 text-white">しゃべってほめてくれる日記帳</p>
        </header>
        <Routes>
          <Route path={`/`} element={<Entrance />} />
          <Route path={`/signin`} element={<Signin />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`*`} element={<NotFound />} />
        </Routes>
        <footer className="App-footer">
            <h1 className="text-white h4">ほめ日記</h1>
        </footer>
    </>
  )
}

export default DefaultPage;