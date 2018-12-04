import React, {Component} from 'react';

import BidButton from './BidButton.jsx';

export default class Listing extends Component {
  render() {
    return (
      <div className="listing">
        <h3>Listing</h3>
        <p>Text</p>
        <p>More Text</p>
        <BidButton />
      </div>
    );
  }
};
