import React, { Component } from 'react';
import { addItems, openCart } from '../../injectState';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.AddToCart = this.AddToCart.bind(this);
  }

  AddToCart() {
    const { desc, id, image, name, price, qty, url, open } = this.props;
    const item = {
      desc,
      id,
      image,
      name,
      price,
      qty,
      url
    };
    if (!id || !price) {
      console.warn('Items must have an Id and a price');
      return;
    }
    addItems(item);
    if (open) {
      openCart();
    }
  }

  render() {
    return <div onClick={() => this.AddToCart()}>{this.props.children}</div>;
  }
}
