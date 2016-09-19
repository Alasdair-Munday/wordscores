import React, { Component } from 'react';
const scrabbleScore =  require('../node_modules/scrabble-score/index.js')
class WordRow extends Component {

  calculateScore(word) {
    return scrabbleScore(word);
  }

  calculateTotal(words,index) {
    const previousWords = words.slice(0,index+1)
    return previousWords.reduce((x,y) => x + scrabbleScore(y),0)
  }

  render() {
    const wordIndex = this.props.wordIndex;
    const words = this.props.words;

    const score = this.calculateScore(words[wordIndex]);
    const total = this.calculateTotal(words, wordIndex);

    return(
      <tr>
        <td>{words[wordIndex]}</td>
        <td>{score}</td>
        <td>{total}</td>
      </tr>
    );
  }
}

export default WordRow
