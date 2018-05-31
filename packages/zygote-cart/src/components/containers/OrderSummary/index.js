import React, { Component } from 'react';
import styles from './styles';
import { Item, Subtotal, ShippingCost, Tax, Total } from '../../containers';

export default class OrderSummary extends Component {
  render() {
    return (
      <div className="zygoteOrderSummaryContainer">
        <Item />
        <div className="zygoteSubFieldsContainer">
          <div className="zygoteSubFields">
            <Subtotal />
            <ShippingCost />
            <Tax />
          </div>
        </div>
        <Total />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
