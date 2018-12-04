import React, {Component} from 'react';

import Listing from './Listing.jsx';

export default class ListingPage extends Component {
  render() {
    return (
      <div className="listing-page">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </div>
    );
  }
}
