import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Firstp from './Firstp'
import Secondp from './Secondp'
import Thirdp from './Thirdp'
import Lastp from './Lastp'
import Loadingp from './Loadingp'

class App extends Component {
    render() {
    return (
      <div>
        <Route exact path="/" component={Firstp}/>
        <Route path="/Secondp/:food1" component={Secondp}/>
        <Route path="/Thirdp/:food1/:food2" component={Thirdp}/>
        <Route path="/Loading/:food1/:food2/:food3" component={Loadingp}/>
        <Route path="/Lastp/" component={Lastp}/>
      </div>
    );
  }
}

export default App;