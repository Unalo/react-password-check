import React from 'react';
import logo from './logo.svg';
import './App.css';

var zxcvbn = require('zxcvbn');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "inpute",
      score : "null"
    };
    this.showHide = this.showHide.bind(this);
    this.passwordStrengh = this.passwordStrengh.bind(this);
  }
  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: "",
    })
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
