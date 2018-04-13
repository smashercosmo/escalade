import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { Item, Coupon, Subtotal } from '../../containers';
import { itemState } from '../../state';

export default class YourCart extends Component {
  render() {
    return (
      <div>
        <Subscribe to={itemState}>
          {state =>
            state.items.length === 0 ? (
              <div className="zygoteEmpty">Your cart is empty</div>
            ) : (
              <div className="zygoteStep1 zygoteStep">
                <Item />
                <Coupon />
                <Subtotal />
              </div>
            )
          }
        </Subscribe>
        <style jsx global>{`
          .zygoteEmpty {
            text-align: center;
            margin: 30px 0;
          }
        `}</style>
      </div>
    );
  }
}
