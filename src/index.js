import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Contract from './utils/contractInstantiator';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
