import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      top_score: 0
    }
  }
}

export default Score;