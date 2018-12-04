import React, {Component} from 'react';

import Listing from './Listing.jsx';

export default class ListingPage extends Component {
  render() {
    return (
      <div className="listing-page">
        <Listing itemName={"crytoKitty"} itemPrice={"32.81"}/>
        <Listing itemName={"Boring Co Flamethrower"} itemPrice={"562.81"}/>
        <Listing itemName={"Cheese pizza"} itemPrice={"1.77"}/>
      </div>
    );
  }
}
