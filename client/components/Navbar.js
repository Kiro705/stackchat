import React, { Component } from 'react';
import NameEntry from './NameEntry';

export default class Navbar extends Component {

  render () {
    return (
      <nav>
        <h3>
        	<NameEntry />
        </h3>
      </nav>
    );
  }
}
