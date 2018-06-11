import React, { Component } from 'react'
import { Subscribe } from 'statable'

import { cartState, userInfo, cost, itemState } from '../../state'
import { Cart } from '../../containers'
import { closeCart, resetCart } from '../../../injectState'
import styles from './styles'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.checkState = this.checkState.bind(this)
  }

  checkState() {
    closeCart()
    const { tab, loading, errors, apiErrors } = cartState.state
    if (tab === 3 && loading === false) {
      if (errors || apiErrors) {
        cartState.setState({ tab: 0, showNav: true })
        return
      }
      resetCart()
    }
  }

  render() {
    return (
      <Subscribe to={cartState}>
        {state => (
          <div onClick={() => this.checkState()}>
            {state.open && (
              <div className="zygoteContainer">
                <Cart
                  brandLogo={this.props.brandLogo}
                  cartHeader={this.props.cartHeader}
                  addToCartMessage={this.props.addToCartMessage}
                  footerMessage={this.props.footerMessage}
                  cartButtonOneMessage={this.props.cartButtonOneMessage}
                  cartButtonTwoMessage={this.props.cartButtonTwoMessage}
                  detailsButtonMessage={this.props.detailsButtonMessage}
                  paymentButtonMessage={this.props.paymentButtonMessage}
                  orderCompleteTitle={this.props.orderCompleteTitle}
                  orderCompleteBody={this.props.orderCompleteBody}
                  googleApiKey={this.props.googleApiKey}
                />
              </div>
            )}
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    )
  }
}
