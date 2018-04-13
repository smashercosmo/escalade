import React, { Component } from 'react';
import Cookie from 'js-cookie';

import { cartState, itemState, cost, userInfo } from '../../state';
import { closeCart } from '../../../injectState';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.checkState = this.checkState.bind(this);
  }

  checkState() {
    closeCart();
    const { tab, loading } = cartState.state;
    if (tab === 4 && loading === false) {
      itemState.setState({ items: [], coupon: '' });
      cartState.setState({ tab: 0, showNav: false });
      cost.setState({
        tax: 0,
        shipping: 0,
        total: 0,
        shippingOptions: null
      });
      userInfo.setState({
        addressSame: true,
        preOrderInfo: null,
        shipping: {
          ShippingFirst: '',
          ShippingLast: '',
          ShippingAddress1: '',
          ShippingCity: '',
          ShippingState: '',
          ShippingZip: '',
          ShippingPhone: '',
          ShippingEmail: '',
          ShippingAddress2: ''
        },
        payment: {
          BillingNumber: '',
          BillingSecurity: '',
          BillingMonth: '',
          BillingYear: ''
        },
        paymentAddress: {
          BillingFirst: '',
          BillingLast: '',
          BillingAddress1: '',
          BillingCity: '',
          BillingState: '',
          BillingZip: '',
          BillingPhone: '',
          BillingAddress2: ''
        }
      });
    }
  }

  render() {
    return (
      <div className="zygoteHeader">
        <div className="zygoteClose" onClick={() => this.checkState()}>
          ×
        </div>
        <h1>Your Cart</h1>
        <style jsx global>{`
          .zygoteClose {
            float: right;
            color: #000;
            font-size: 2em;
            margin-right: 5px;
            cursor: pointer;
          }
          .zygoteHeader {
            background-color: #f7f7f7;
            padding: 20px;
          }
          .zygoteHeader > h1 {
            margin: 0;
            color: #000;
            font-size: 1.7em;
            font-family: Special Elite, serif;
            text-transform: uppercase;
          }
        `}</style>
      </div>
    );
  }
}
