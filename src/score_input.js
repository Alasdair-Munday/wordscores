import React, { Component } from 'react';

class ScoreInput extends Component {
  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(event) {
    this.props.wordAdder(event);
    event.target.value = '';
  }

  render() {
    return(
      <div>
        <input placeholder="Enter a word" onBlur={this.onBlur} />
      </div>
    )
  }
}

export default ScoreInput
