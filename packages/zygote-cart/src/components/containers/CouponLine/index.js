import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';
import styles from './styles';

export default class CouponLine extends Component {
  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className="zygoteCouponLine">
            <div className="zygoteCouponHead">Coupon Code: {state.coupon}</div>
            <div className="zygoteCouponTotal">-$2.00</div>
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
