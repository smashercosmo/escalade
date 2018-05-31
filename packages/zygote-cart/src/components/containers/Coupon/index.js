import React, { Component } from 'react';
import { Subscribe } from 'statable';
import FaEdit from 'react-icons/lib/fa/edit';

import { itemState } from '../../state';
import styles from './styles';

export default class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleCoupon = this.handleCoupon.bind(this);
  }

  handleCoupon() {
    if (this.coupon.value) {
      itemState.setState({ coupon: this.coupon.value });
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className={`zygoteCouponLine`}>
            {this.state.show ? (
              <div className="zygoteCouponCode">
                <input
                  type="text"
                  ref={input => (this.coupon = input)}
                  name="zygoteCouponCode"
                  placeholder={'Enter Coupon Code...'}
                />
                <button
                  onClick={() => this.handleCoupon()}
                  className="zygoteCouponButton"
                >
                  Apply
                </button>
              </div>
            ) : (
              <div>
                {state.coupon ? (
                  <div
                    className="zygoteEditCoupon"
                    onClick={() => this.setState({ show: true })}
                  >
                    <FaEdit />
                  </div>
                ) : (
                  <div
                    className="zygoteAddCoupon"
                    onClick={() => this.setState({ show: true })}
                  >
                    +
                  </div>
                )}

                {state.coupon ? (
                  <div style={{ display: 'inline-block' }}>
                    Coupon:
                    <div className="zygoteCouponHighlight"> {state.coupon}</div>
                  </div>
                ) : (
                  'Apply a Coupon'
                )}
              </div>
            )}

            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
