import React, {Component} from 'react';

import Listing from './Listing.jsx';
import FilterDrawer from './FilterDrawer.jsx';

export default class ListingPage extends Component {
  render() {
    return (
      <div className="listing-page">
          <div style={{float: "left", height: "100%", width: "10%"}}>
              <FilterDrawer className="listing-page__filter-drawer" options={["ERC-721 Tokens", "Real Estate", "Financial Assets", "Consumables", "Misc", "Vehicles"]}/>
          </div>
          <div className="listing-page__grid" style={{margin: "5% 10%", display: "flex", flexWrap: "wrap", height: "100%", width: "80%"}}>
            <Listing itemName={"CrytoKitty"} itemPrice={"32.81"}/>
            <Listing itemName={"Boring Co Flamethrower"} itemPrice={"562.81"}/>
            <Listing itemName={"Cheese pizza"} itemPrice={"1.77"}/>
            <Listing itemName={"Taj Mahal"} itemPrice={"9999999999999.81"}/>
            <Listing itemName={"CryptoZombie"} itemPrice={"562.81"}/>
            <Listing itemName={"CryptoKitty"} itemPrice={"12.77"}/>
            <Listing itemName={"Rocket Launcher"} itemPrice={"3432.81"}/>
            <Listing itemName={"Home"} itemPrice={"563940332.81"}/>
            <Listing itemName={"Submarine"} itemPrice={"7468336.32"}/>
          </div>
      </div>
    );
  }
}
