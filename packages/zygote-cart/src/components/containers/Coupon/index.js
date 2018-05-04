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
          <div
            className={`zygoteCouponLine ${
              this.state.show ? 'zygoteShow' : ''
            }`}
          >
            <div className="zygoteCoupon">
              <label htmlFor="zygoteCouponCode">
                Coupon Code <small>(Applied at checkout)</small>
              </label>
              <input
                type="text"
                name="couponCode"
                id="zygoteCouponCode"
                placeholder={this.state.show ? '' : 'Coupon Code'}
                onChange={e => itemState.setState({ coupon: e.target.value })}
                onFocus={() => this.setState({ show: true })}
                onBlur={() => this.setState({ show: false })}
                value={state.coupon}
              />
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
