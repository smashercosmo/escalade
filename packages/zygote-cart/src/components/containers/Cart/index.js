import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cartState, itemState } from '../../state';
import { cartContent } from '../../utils';
import { Header, Footer, Content, StepButtons } from '../../containers';
import styles from './styles';

export default class Cart extends Component {
  render() {
    const { tabs } = cartContent;
    return (
      <Subscribe to={cartState}>
        {state => (
          <div className="zygoteModal" onClick={e => e.stopPropagation()}>
            <Header
              brandLogo={this.props.brandLogo}
              cartHeader={this.props.cartHeader}
              addToCartMessage={this.props.addToCartMessage}
            />
            <div className="zygoteForm">
              <Content
                active={
                  state.tab === tabs.length
                    ? 'Order Placed'
                    : tabs[state.tab].title
                }
              />
              <StepButtons
                cartButtonOneMessage={this.props.cartButtonOneMessage}
                cartButtonTwoMessage={this.props.cartButtonTwoMessage}
                detailsButtonMessage={this.props.detailsButtonMessage}
                paymentButtonMessage={this.props.paymentButtonMessage}
                orderCompleteMessage={this.props.orderCompleteMessage}
              />
            </div>
            <Footer footerMessage={this.props.footerMessage} />
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
