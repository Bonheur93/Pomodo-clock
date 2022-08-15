import React, { Component } from 'react';
import './App.css';
import Body from './Components/Body';
import ManualIncrement from './Components/Increment';


class App extends Component {
  render() {
    return (
     <div className="App ">
      <Body/>
      <ManualIncrement/>
     
     </div>
    );
  }
}

export default App;
