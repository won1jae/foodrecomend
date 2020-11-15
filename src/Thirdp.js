import React, { Component } from 'react';
import Third from "./components/Third.svg"
import { Link } from 'react-router-dom';
import "./Btn.css"
class Thirdp extends Component {
    render(){
        const { params } = this.props.match;
        const S1="/Loading/"+params.food1+"/"+params.food2+"/초밥";
        const S2="/Loading/"+params.food1+"/"+params.food2+"/양념고기";
    return(
        <div>
            <img src={Third} alt="양자택일" />
            <Link to={S1}>
                <button class="gb1"></button>
            </Link>
            <Link to={S2}>
                <button class="gb2"></button>
            </Link>
        </div>
    );
}
}

export default Thirdp;