import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cost } from '../../state';
import styles from './styles';

export default class ShippingCost extends Component {
  render() {
    return (
      <Subscribe to={cost}>
        {state => (
          <div className="zygoteShipLine">
            <div className="zygoteShipHead">Shipping</div>
            <div className="zygoteShip">
              ${state.shipping.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </div>
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
