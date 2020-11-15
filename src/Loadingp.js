import './Btn.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from "./components/Loading.svg"

class Loadingp extends Component {
  render() {
    const { params } = this.props.match;
    const data1=params.food1+","+params.food2+","+params.food3;
    const data2={Inputs:{input1:[{음식:data1}]},GlobalParameters:{}};
    const api_key="X7XQrMLh7JS+e4tfRlQj0XOhoV8r7nnxEDck+2p02BuY/KCb+JkRGmEv6VvznBsdbF6xsUirTnCV2zUm64qDWg==";
    axios.post('/workspaces/f35317261c994b7db80bc27d0f322422/services/03c342af47224226b00cb8b910a376b8/execute?api-version=2.0&format=swagger',
    {headers:
        {'Content-Type':'application/json', 'Authorization':`Bearer ${api_key}`}, data:{data2}})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return(
      <div>
        <img src={Loading} alt="로딩중" />
        <button class="gb1"></button>
        <Link to="/Lastp">
            <button class="gb1"></button>
        </Link>
      </div>
    )
  }
}

export default Loadingp;