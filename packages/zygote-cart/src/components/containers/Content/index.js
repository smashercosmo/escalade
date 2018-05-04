import React, { Component } from 'react';

import {
  YourCart,
  Shipping,
  Payment,
  Confirm,
  OrderPlaced
} from '../../containers';
import styles from './styles';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(title) {
    switch (title) {
      case 'Your Cart':
        return <YourCart />;
      case 'Shipping Address':
        return <Shipping />;
      case 'Payment Method':
        return <Payment />;
      case 'Confirm Order':
        return <Confirm />;
      case 'Order Placed':
        return <OrderPlaced />;
      default:
        return <YourCart />;
    }
  }

  render() {
    const { active } = this.props;
    return (
      <div className="zygoteProdTable">
        {this.renderContent(active)}
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}
