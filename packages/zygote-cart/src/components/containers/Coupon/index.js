import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';
import styles from './styles';

export default class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className={`zygoteCouponLine`}>
            <div className="zygoteAddCoupon">+</div>
            Apply a Coupon
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
