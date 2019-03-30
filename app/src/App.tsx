import React, { Component } from 'react';
import './App.css';

import {Stoplight, LightState} from './traffic';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Stoplight state={LightState.Red} />
      </div>
    );
  }
}

export default App;
