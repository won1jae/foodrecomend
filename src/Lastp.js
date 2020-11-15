import Last from "./components/Last.svg"
import { Link } from 'react-router-dom';
import "./Btn.css"
function Lastp() {
    return(
        <div>
            <img src={Last} alt="결과" />
            <Link to="/">
                <button class="gb1"></button>
            </Link>
            <a href="https://www.google.com/maps/search/%EB%96%A1%EB%B3%B6%EC%9D%B4/@35.1602662,129.1420999,15.36z"><button class="gb2"></button></a>
        </div>
    );
}

export default Lastp;