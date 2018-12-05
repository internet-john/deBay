import React, {Component} from 'react';
import MuiButton from '@material-ui/core/Button';

export default class Button extends Component {
  render() {
    return (
      <MuiButton className={this.props.className} variant={this.props.variant} color={this.props.color}>
        {this.props.text}
      </MuiButton>
    );
  }
};
