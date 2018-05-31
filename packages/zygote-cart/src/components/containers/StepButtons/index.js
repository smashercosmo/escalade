import React, { Component } from 'react';
import { Subscribe } from 'statable';
import axios from 'axios';

import { cartState, userInfo, zygoteApi, itemState, cost } from '../../state';
import { cartContent, validateInputs } from '../../utils';
import styles from './styles';

export default class StepButtons extends Component {
  constructor(props) {
    super(props);
    this.submitOrder = this.submitOrder.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  submitOrder() {
    const {
      preOrderInfo,
      payment,
      paymentAddress,
      addressSame
    } = userInfo.state;
    const { items } = itemState.state;
    let updated = { ...preOrderInfo };
    Object.keys(payment).forEach(k => {
      updated[`${k[0].toLowerCase()}${k.slice(1)}`] = payment[k];
    });
    Object.keys(paymentAddress).forEach(k => {
      updated[`${k[0].toLowerCase()}${k.slice(1)}`] = paymentAddress[k];
    });
    updated.billingSame = addressSame;
    cartState.setState({
      tab: cartState.state.tab + 1,
      showNav: false,
      loading: true
    });
    if (!zygoteApi.state.api) return console.warn('No api provided');
    axios
      .post(zygoteApi.state.api, updated)
      .then(res => {
        console.log('Submit Order --> ', res.data);
        res.data.products.forEach(product => {
          const regexp = new RegExp(product.id, 'gi');
          const updatedItem = items.find(({ id }) => regexp.test(id));

          if (!updatedItem) {
            console.warn('Item not found and being removed from the array');
            const index = itemState.state.items.indexOf(updatedItem);
            const updated = [...itemState.state.items];
            updated.splice(index, 1);
            itemState.setState({
              items: updated
            });

            return;
          }
          updatedItem.price = product.price;
          itemState.setState({
            items: itemState.state.items.map(
              item => (item.id === product.id ? updatedItem : item)
            )
          });
        });
        updated.success = res.data.success;
        updated.locations = res.data.locations;
        userInfo.setState({
          preOrderInfo: updated
        });
        cost.setState({
          tax: res.data.tax,
          shipping: res.data.shipping,
          total: res.data.total
        });
        cartState.setState({
          loading: false,
          apiErrors: res.data.errors.length > 0 ? res.data.errors : null
        });
      })
      .catch(err => {
        let error = '';
        if (err.request && err.request.status === 404) {
          error = `Error with API: ${err.response.statusText}`;
        } else if (err.request && err.request.status === 0 && !err.response) {
          error =
            'Something went wrong with the request, no response was given.';
        } else {
          error = err.response || JSON.stringify(err);
        }
        cartState.setState({
          apiErrors: [error],
          loading: false
        });
      });
  }

  submitUser() {
    const { shipping } = userInfo.state;
    const { items, coupon } = itemState.state;
    let updated = {};
    Object.keys(shipping).forEach(k => {
      updated[`${k[0].toLowerCase()}${k.slice(1)}`] = shipping[k];
    });
    updated.site = cartState.state.site;
    updated.products = items;
    updated.couponCode = coupon;
    cartState.setState({
      tab: cartState.state.tab + 1,
      loading: true
    });

    axios
      .post(zygoteApi.state.api, updated)
      .then(res => {
        console.log('First Response --> ', res.data);
        res.data.products.forEach(product => {
          const regexp = new RegExp(product.id, 'gi');
          const updatedItem = items.find(({ id }) => regexp.test(id));

          if (!updatedItem) {
            console.warn('Item not found and being removed from the array');
            const index = itemState.state.items.indexOf(updatedItem);
            const updated = [...itemState.state.items];
            updated.splice(index, 1);
            itemState.setState({
              items: updated
            });

            return;
          }
          updatedItem.price = product.price;
          itemState.setState({
            items: itemState.state.items.map(
              item => (item.id === product.id ? updatedItem : item)
            )
          });
        });
        if (res.data.shippingOptions) {
          updated.shippingOptions = {
            [Object.keys(res.data.shippingOptions)[0]]: '0'
          };
        }
        updated.success = res.data.success;
        updated.cartId = res.data.cartId;
        updated.locations = res.data.locations;
        userInfo.setState({
          preOrderInfo: updated
        });
        cost.setState({
          tax: res.data.tax,
          shipping: res.data.shipping,
          total: res.data.total,
          shippingOptions: res.data.shippingOptions || null
        });
        cartState.setState({
          loading: false,
          apiErrors: res.data.errors.length > 0 ? res.data.errors : null
        });
      })
      .catch(err => {
        let error = '';
        if (err.request && err.request.status === 404) {
          error = `Error with API: ${err.response.statusText}`;
        } else if (err.request && err.request.status === 0 && !err.response) {
          error =
            'Something went wrong with the request, no response was given.';
        } else {
          error = err.response || JSON.stringify(err);
        }
        cartState.setState({
          apiErrors: [error],
          loading: false
        });
      });
  }

  renderButtons(tab) {
    switch (tab) {
      case 0:
        return (
          <div>
            <button
              onClick={() => cartState.setState({ tab: tab + 1 })}
              className="zygoteBtn zygoteCheckoutBtn"
            >
              {this.props.cartButtonOneMessage}
            </button>
            <button
              onClick={() => cartState.setState({ open: false })}
              className="zygoteBtn zygoteShoppingBtn"
            >
              {this.props.cartButtonTwoMessage}
            </button>
          </div>
        );

      case 1:
        return (
          <div>
            <button
              className="zygoteBtn"
              onClick={() => cartState.setState({ tab: tab + 1 })}
            >
              {this.props.detailsButtonMessage}
            </button>
          </div>
        );
    }
  }

  render() {
    const { tabs } = cartContent;
    return (
      <Subscribe to={[cartState, userInfo, itemState]}>
        {(state, userState, itemState) => (
          <div className="zygoteStepBtns">
            {this.renderButtons(state.tab)}
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}

StepButtons.defaultProps = {
  cartButtonOneMessage: 'Secure Checkout',
  cartButtonTwoMessage: 'Continue Shopping',
  detailsButtonMessage: 'Next Step'
};
