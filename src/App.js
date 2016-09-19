import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreInput from './score_input.js'
import ScoreColumn from './ScoreColumn.js'
import ColumnContainer from './ColumnContainer.js'

class App extends Component {
  render() {
    return (
      <ColumnContainer />
    );
  }
}

export default App;
