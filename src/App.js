import React, {Component} from 'react';

import GameContainer from './components/game-container';
import Header from './components/header';

import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    // game data
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header/>
        <GameContainer/>
      </div>
    )
  }
}

export default App;
