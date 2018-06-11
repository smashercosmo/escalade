import React, { Component } from 'react';
import { Subscribe } from 'statable';

import styles from './styles';
import { itemState } from '../../state';
import {
  Item,
  Subtotal,
  ShippingCost,
  Tax,
  Total,
  CouponLine
} from '../../containers';

export default class OrderSummary extends Component {
  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className="zygoteOrderSummaryContainer">
            <Item />
            <div className="zygoteSubFieldsContainer">
              <div className="zygoteSubFields">
                <Subtotal />
                {state.coupon ? <CouponLine /> : null}
                <ShippingCost />
                <Tax />
              </div>
            </div>
            <Total />
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
