import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';

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
            <div className="zygoteSubHead">subtotal</div>
            <div className="zygoteSubTotal">
              ${this.renderPrice(state.items).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </div>
            <style jsx global>{`
              .zygoteSubLine {
                width: 100%;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                padding: 10px 0;
                text-transform: uppercase;
                text-align: center;
                font-size: 0.9em;
                margin-top: 20px;
                color: #aaa;
              }
              @media (min-width: 900px) {
                .zygoteSubLine div:first-of-type {
                  float: left;
                }
                .zygoteSubLine div:nth-of-type(2) {
                  float: right;
                }
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
