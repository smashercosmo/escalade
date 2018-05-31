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
