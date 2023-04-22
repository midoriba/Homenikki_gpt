import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contents from './Components/Contents'
import Entrance from './Components/Entrance'
import Signin from './Components/Signin'
import Signup from './Components/Signup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white display-4">ほめ日記</h1>
        <hr />
        <p className="m-0 text-white">しゃべってほめてくれる日記帳</p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Entrance />} />
          <Route path={`/signin`} element={<Signin />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/contents`} element={<Contents />} />
        </Routes>
      </BrowserRouter>
      <footer className="App-footer">
        <h1 className="text-white h4">ほめ日記</h1>
      </footer>
    </div>
  );
}

export default App;
