import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cartState, userInfo, cost, itemState } from '../../state';
import { Cart } from '../../containers';
import { closeCart } from '../../../injectState';
import styles from './styles';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.checkState = this.checkState.bind(this);
  }

  checkState() {
    closeCart();
    const { tab, loading, errors, apiErrors } = cartState.state;
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
      <Subscribe to={cartState}>
        {state => (
          <div onClick={() => this.checkState()}>
            {state.open && (
              <div className="zygoteContainer">
                <Cart />
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
