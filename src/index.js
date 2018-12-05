import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import Contract from './js/utils/contractInstantiator.js';
import ListingPage from './js/components/ListingPage.jsx';

ReactDOM.render(<ListingPage contract={Contract}/>, document.querySelector('.app'));
