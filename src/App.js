import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Valid from "./components/Valid/index"
import HelloWorld from "./components/HelloWorld/index";
import LifeCycle from "./components/LifeCycle/index";
import Container from "./components/Container/index";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to billing monitor web</h1>
        </header>

          <Valid/>

          <HelloWorld word="jack"/>

          <br/>

          {/*<LifeCycle num="1"/>*/}

          <br/>
          <Container/>

      </div>
    );
  }
}

export default App;
