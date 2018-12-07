import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

import auction from '../auction';
import assetData from '../../db/assetData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    height: '100%'
  },
  button: {
    right: "20%"
  },
});

// TODO: Decompose into individual components
//       - container
//       - listing
//       - action bar
//       etc
class ListingPage extends Component {
  constructor(props) {
    super(props);

    this.classes = this.props.classes;
    this.contract = this.props.contract;
    this.account;
    this.web3Provider;

    this.handleClick = this.handleClick.bind(this);
    this.mapData = this.mapData.bind(this);
    this.getAccount = this.getAccount.bind(this);
  }

  componentDidMount() {
    this.setProvider();
    this.getAccount();
    // this.initContract();
  }

  setProvider() {
    if (window.ethereum) {
      this.web3Provider = window.ethereum;

      try {
        window.ethereum.enable();
      } catch (error) {
        console.error(`Something went wrong - ${error}`);
      }
    } else if (window.web3) {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    web3 = new Web3(this.web3Provider);

    // return this.initContract();
  }

  getAccount() {
    let account;
    web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.log(error);
      }

      this.account = accounts[0];
    });
  }

  // initContract() {
  //
  // }

  handleClick(e) {
    const price = e.currentTarget.dataset["price"];

    // this.contract.methods.bid(web3.toWei(price), {from: this.account});
    this.contract.send(price, {from: this.account});
    // this.contract.methods.bid();
  }

  // Move GridListTile to Listing component
  mapData(assetData) {
    return (
      assetData.map((asset, i) => (
        <GridListTile key={i}>
          <img src={asset.img} alt={asset.title} />
          <GridListTileBar
            title={asset.title}
            subtitle={<span>{asset.price}</span>}
            actionIcon={
              <Button className={this.classes.button} variant="contained" color="primary" data-price={asset.price} onClick={this.handleClick}>Bid</Button>
            }
          />
        </GridListTile>
      ))
    );
  }

  render() {
    return (
      <div className={this.classes.root}>
        <GridList cellHeight={320} className={this.classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div"><h3>deBay - the decentralized auction house.</h3></ListSubheader>
          </GridListTile>
          {this.mapData(assetData, this.classes)}
        </GridList>
      </div>
    );
  }
}

ListingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingPage);
