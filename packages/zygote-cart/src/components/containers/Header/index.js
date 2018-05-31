import React, { Component } from 'react';
import Cookie from 'js-cookie';
import { Subscribe } from 'statable';

import { cartState, itemState, cost, userInfo } from '../../state';
import { Nav } from '../../containers';
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
      <Subscribe to={cartState}>
        {state => (
          <div className="zygoteHeader">
            <div className="zygoteClose" onClick={() => this.checkState()}>
              ×
            </div>
            <div className="zygoteBrandLogo">
              {this.props.brandLogo ? (
                <img src={this.props.brandLogo} alt="" />
              ) : (
                <div className="zygoteDefaultBrandLogo">Brand Logo</div>
              )}
            </div>
            {state.tab === 1 ? (
              <Nav />
            ) : state.tab === 2 ? (
              <Nav />
            ) : state.tab === 3 ? (
              <div>tab 3</div>
            ) : (
              <div>
                <div className="zygoteAddedToCart">
                  {this.props.addToCartMessage}
                </div>
                {this.props.cartHeader ? (
                  <div className="zygoteCartHeader">
                    {this.props.cartHeader}
                  </div>
                ) : null}
              </div>
            )}

            <style jsx>{styles}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}

Header.defaultProps = {
  addToCartMessage: "You've added to your cart!"
};
