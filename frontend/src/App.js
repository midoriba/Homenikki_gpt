import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contents from './Components/Contents'
import DefaultPage from './Components/DefaultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/contents`} element={<Contents />} />
          <Route path={`/*`} element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
