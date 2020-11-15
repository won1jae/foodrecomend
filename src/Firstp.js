import First from "./components/First.svg"
import { Link } from 'react-router-dom'
import "./Btn.css"
function Firstp() {
    return(
        <div>
            <img src={First} alt="양자택일" />
            <Link to="/Secondp/피자">
                <button class="gb1"></button>
            </Link>
            <Link to="/Secondp/치킨">
                <button class="gb2"></button>
            </Link>
        </div>
    );
}

export default Firstp;