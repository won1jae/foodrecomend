import React, { Component } from 'react';
import Second from "./components/Second.svg"
import { Link } from 'react-router-dom';
import "./Btn.css"
class Secondp extends Component {
    render(){
        const { params } = this.props.match;
        const S1="/Thirdp/"+params.food1+"/짜장면";
        const S2="/Thirdp/"+params.food1+"/짬뽕";
        return(
        <div>
            <img src={Second} alt="양자택일" />
            <Link to={S1} >
                <button class="gb1"></button>
            </Link>
            <Link to={S2} >
                <button class="gb2"></button>
            </Link>
        </div>
    );
}
}

export default Secondp;