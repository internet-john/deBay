import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class BidButton extends Component {
  render() {
    return (
      <Button className="bid-button" variant="contained" color="primary" fullWidth>
        Bid
      </Button>
    );
  }
};
