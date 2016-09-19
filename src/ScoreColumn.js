import React, { Component } from 'react';
import WordRow from './WordRow.js'

class ScoreColumn extends Component {

  render() {
    const rows = [];
    const words = this.props.words

    for(var i=0; i<words.length; i++){
      rows.push(<WordRow key={i} wordIndex={i} words={words} />)
    }

    return(
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Score</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    )
  }
}

export default ScoreColumn
