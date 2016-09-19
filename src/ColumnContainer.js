import React, { Component } from 'react';
import ScoreColumn from './ScoreColumn.js';
import ScoreInput from './score_input.js'

class ColumnContainer extends Component {

  constructor(props) {
    super(props)

    this.createWordAdder = this.createWordAdder.bind(this);

    this.state = {
      players: []
    };
  }


  createWordAdder(userIndex) {
    return (event) => {
      let players = this.state.players
      let word = event.target.value
      if(word){
        players[userIndex].words.push(event.target.value)
        this.setState({ players })
      }
    }
  }

  render() {
    const players = [];
    const scoreColumns = [];
    const scoreInputs = [];
    const addUser = (event) => {
      let userName = event.target.value
      if(userName){
        event.target.value = ''
        let players = this.state.players
        players.push({name: userName, words: []})
        this.setState({ players })
      }
    }


    this.state.players.forEach((user,key) =>{
      players.push(<th key={key}>{user.name}</th>);
      scoreColumns.push(<td key={key}><ScoreColumn words={user.words}/></td>);
      scoreInputs.push(<td key={key}><ScoreInput wordAdder={this.createWordAdder(key)} /></td>)
    })

    return(
      <div>
        <table>
          <thead>
            <tr>
              {scoreInputs}
            </tr>
            <tr>
              {players}
            </tr>
          </thead>
          <tbody>
            <tr>
              {scoreColumns}
            </tr>
          </tbody>
        </table>
        <input onBlur={addUser} />
      </div>
    )
  }
}

export default ColumnContainer
