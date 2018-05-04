import React, { Component } from 'react';
import Cookie from 'js-cookie';

import { cartState, itemState, cost, userInfo } from '../../state';
import { closeCart } from '../../../injectState';
import styles from './styles.js';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.checkState = this.checkState.bind(this);
  }

  checkState() {
    closeCart();
    const { tab, loading, apiErrors, errors } = cartState.state;

    if (tab === 4 && loading === false) {
      if (errors || apiErrors) {
        cartState.setState({ tab: 0, showNav: true });
        return;
      }
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
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}
