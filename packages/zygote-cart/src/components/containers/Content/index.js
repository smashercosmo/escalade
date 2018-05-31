import React, { Component } from 'react';

import {
  YourCart,
  YourDetails,
  YourPayment,
  YourOrder
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
      case 'Your Details':
        return <YourDetails />;
      case 'Your Payment':
        return <YourPayment />;
      case 'Your Order':
        return <YourOrder />;

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
