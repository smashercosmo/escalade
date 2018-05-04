import React, { Component } from 'react';
import { Subscribe } from 'statable';
import axios from 'axios';

import {
  Item,
  Subtotal,
  ShippingCost,
  Tax,
  Total,
  Loading
} from '../../containers';
import { cartState, cost, userInfo, zygoteApi, itemState } from '../../state';
import styles from './styles';

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.changeShipping = this.changeShipping.bind(this);
  }

  changeShipping(e, attr) {
    let updated = { ...userInfo.state.preOrderInfo };
    updated.shippingOptions = { [attr]: e.target.value };
    cartState.setState({
      loading: true
    });
    userInfo.setState({
      preOrderInfo: updated
    });
    delete updated.locations;
    delete updated.success;
    updated.products = [];
    axios
      .post(zygoteApi.state.api, updated)
      .then(res => {
        console.log('Shipping Change --> ', res.data);
        res.data.products.forEach(product => {
          const { items } = itemState.state;
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

  render() {
    if (cartState.state.loading)
      return (
        <div className="zygoteStep5 zygoteStep">
          <Loading />
        </div>
      );

    return (
      <Subscribe to={[cartState, cost]}>
        {(state, cost) => (
          <div className="zygoteStep4 zygoteStep">
            {state.apiErrors ? (
              <div className="zygoteMsgs">
                {state.apiErrors.length > 0 &&
                  state.apiErrors.map((err, i) => (
                    <div key={i} className="zygoteErr">
                      {err}
                    </div>
                  ))}
              </div>
            ) : null}
            <Item />
            {cost.shippingOptions ? (
              <div className="zygoteShipOptionLine">
                <h4>Shipping Options</h4>
                <div className="zygoteShippingInputs">
                  {Object.keys(cost.shippingOptions).map(k =>
                    cost.shippingOptions[k].map((shipOption, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          name="shippingOption"
                          value={i}
                          onChange={e => this.changeShipping(e, k)}
                          defaultChecked={
                            cost.shipping === Number(shipOption.amount)
                          }
                        />
                        {shipOption.name} (${shipOption.amount})
                      </label>
                    ))
                  )}
                </div>
              </div>
            ) : null}
            <Subtotal />
            <ShippingCost />
            <Tax />
            <Total />
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
