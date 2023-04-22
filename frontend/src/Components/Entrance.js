import { Link } from "react-router-dom";
import './Form.css';

function Entrance() {
  return (
    <div className="from-box">
      <div className="glass">
        <div>新規登録は<Link to={`/signup/`}>こちら</Link></div>
        <hr />
        <div>ログインは<Link to={`/signin/`}>こちら</Link></div>
      </div>
    </div>
  )
}

export default Entrance;