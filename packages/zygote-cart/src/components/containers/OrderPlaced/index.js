import React, { Component } from 'react';
import { Subscribe } from 'statable';

import {
  Item,
  Subtotal,
  ShippingCost,
  Tax,
  Total,
  Loading
} from '../../containers';
import { cartState } from '../../state';
import styles from './styles';

export default class OrderPlaced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Your order has been placed!'
    };
  }

  render() {
    if (cartState.state.loading)
      return (
        <div className="zygoteStep5 zygoteStep">
          <Loading />
        </div>
      );

    return (
      <Subscribe to={cartState}>
        {state => (
          <div className="zygoteStep zygoteStep5">
            <div className="zygoteMsgs">
              {state.apiErrors ? (
                state.apiErrors.length > 0 &&
                state.apiErrors.map((err, i) => {
                  return (
                    <div key={i} className="zygoteErr">
                      {err}
                    </div>
                  );
                })
              ) : (
                <h2>{this.state.header}</h2>
              )}
            </div>

            <Item />
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
