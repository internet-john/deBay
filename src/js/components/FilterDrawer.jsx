import React, {Component} from 'react';

import Button from './Button.jsx';

export default class ListingPage extends Component {

    renderButtons(options) {
      return (
        options.map((option, i) => {
          return (
            <Button
              key={i}
              className="filter-drawer__filter-button"
              variant="contained"
              color={null}
              text={option}>
            </Button>
          )
        })
      );
    }

    render() {
        const options = this.renderButtons(this.props.options);

        return (
            <div className={this.props.className}>
                {options}
            </div>
        )
    }
}
