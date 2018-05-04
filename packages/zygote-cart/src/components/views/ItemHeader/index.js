import React, { Component } from 'react';
import styles from './styles';

export default class ItemHeader extends Component {
  render() {
    return (
      <div className="zygoteProdHeader">
        <div>Item</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}
