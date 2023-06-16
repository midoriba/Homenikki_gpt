import { Link } from "react-router-dom";
import './Form.css';

function Entrance() {
  return (
    <div className="from-box">
      <div className="glass">
        <div>お探しのページは見つかりませんでした。</div>
        <hr />
        <div><Link to={`/`}>ホーム</Link></div>
      </div>
    </div>
  )
}

export default Entrance;