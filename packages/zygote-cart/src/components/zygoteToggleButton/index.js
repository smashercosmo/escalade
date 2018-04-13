import React, { Component } from 'react';

import { cartState } from '../state';
import { toggleCart } from '../../injectState';

export default class zygoteToggleButton extends Component {
  render() {
    return (
      <div style={{ display: 'inline-block' }} onClick={() => toggleCart()}>
        {this.props.children}
      </div>
    );
  }
}
