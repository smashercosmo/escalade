import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Subscribe } from 'statable';
import { FoldingCube } from 'better-react-spinkit';

import styles from './styles';
import { cost, cartState, userInfo, itemState, zygoteApi } from '../../state';
import { removeCookies, resetCart } from '../../../injectState';

export default class ShippingOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingOption: 0
    };

    this.changeShipping = this.changeShipping.bind(this);
  }

  changeShipping(i) {
    console.log(i);
  }

  async componentDidMount() {
    if (cartState.state.tab === 2) {
      const { shipping } = userInfo.state;
      const { items, coupon } = itemState.state;
      let updated = { ...shipping };
      const names = updated.shippingFullName.split(' ');
      updated.shippingFirst = names[0];
      updated.shippingLast = names[1];
      delete updated.shippingFullName;
      updated.site = cartState.state.site;
      updated.products = items;
      updated.couponCode = coupon;
      cartState.setState({
        loading: true
      });
      const shippingRes = await fetch(zygoteApi.state.api, {
        body: JSON.stringify(updated),
        method: 'POST'
      })
        .then(res => res.json())
        .catch(err => {
          removeCookies();
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
      shippingRes.products.forEach(product => {
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
      updated.shippingOptions = [];
      if (shippingRes.shippingOptions) {
        Object.keys(shippingRes.shippingOptions).forEach(option => {
          if (shippingRes.shippingOptions[option].length > 0) {
            updated.shippingOptions = updated.shippingOptions.concat(
              shippingRes.shippingOptions[option]
            );
          }
        });
      }

      updated.success = shippingRes.success;
      updated.cartId = shippingRes.cartId;
      updated.locations = shippingRes.locations;
      userInfo.setState({
        preOrderInfo: updated
      });
      cost.setState({
        tax: shippingRes.tax,
        shipping: shippingRes.shipping,
        total: shippingRes.total,
        shippingOptions:
          updated.shippingOptions.length > 0 ? updated.shippingOptions : null
      });
      cartState.setState({
        loading: false,
        apiErrors: shippingRes.errors.length > 0 ? shippingRes.errors : null
      });
      if (shippingRes.errors.length > 0) {
        removeCookies();
        shippingRes.errors.forEach(err => {
          if (err.includes('CRT-1-00013')) {
            itemState.setState({ coupon: '' });
          }
        });
      }
    }
  }

  render() {
    return (
      <Subscribe to={[cartState, cost]}>
        {(cart, cost) => {
          if (cart.loading) {
            return (
              <div className="zygoteLoading">
                <div className="zygoteLoader">
                  <FoldingCube size={50} color="rgb(0, 207, 255)" />
                </div>
              </div>
            );
          }
          if (cart.apiErrors) {
            return (
              <div className="zygoteShippingErrors">
                <div className="zygoteErrorsTitle">
                  Please Contact Customer Support
                </div>
                <div className="zygoteErrorsContact">
                  (contact information for customer support)
                </div>
                <div className="zygoteMsgs">
                  {cart.apiErrors.map((error, i) => {
                    return (
                      <div key={i} className="zygoteErr">
                        {error}
                      </div>
                    );
                  })}
                </div>
                <style jsx>{styles}</style>
              </div>
            );
          }
          return (
            <div className="zygoteShippingOptionsContainer">
              <div className="zygoteShippingOptions">
                {cost.shippingOptions ? (
                  <div className="zygoteShipOptionLine">
                    <div className="zygoteSectionTitle">
                      4. Shipping Options
                    </div>
                    <div className="zygoteShippingInputs">
                      {cost.shippingOptions.map((shipOption, i) => (
                        <div
                          key={i}
                          className="zygoteCheckboxContainer"
                          onClick={() => this.changeShipping(i)}
                        >
                          <label>
                            <div className="zygoteShippingName">
                              {shipOption.carrier.serviceType} {shipOption.name}
                            </div>
                            <div className="zygoteShippingPrice">
                              ${shipOption.amount}
                            </div>
                            <input
                              type="radio"
                              value={i}
                              className="zygoteShippingInput"
                              onChange={() =>
                                this.setState({ shippingOption: i })
                              }
                              checked={this.state.shippingOption === i}
                            />
                            <span className="zygoteCheckbox" />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              <style jsx>{styles}</style>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
