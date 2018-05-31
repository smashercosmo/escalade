import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';
import styles from './styles';

export default class Subtotal extends Component {
  constructor(props) {
    super(props);

    this.renderPrice = this.renderPrice.bind(this);
  }

  renderPrice(items) {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.qty;
    });
    return total;
  }

  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className="zygoteSubLine">
            <div className="zygoteSubHead">Subtotal</div>
            <div className="zygoteSubTotal">
              ${this.renderPrice(state.items).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </div>
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
