import React, { Component } from 'react'
import { Subscribe } from 'statable'

import {
  Item,
  Coupon,
  Subtotal,
  ShippingCost,
  Tax,
  Total,
  PaymentLine,
  CouponLine
} from '../../containers'
import { itemState } from '../../state'
import styles from './styles'

export default class YourCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    if (!state.coupon) {
      this.setState({ animate: true })
    }
  }

  componentDidMount() {
    // For initial load of animation
    if (!itemState.state.coupon) {
      this.setState({ animate: true })
    }
    // For checking when coupon is toggled
    itemState.subscribe(this.onChange)
  }

  componentWillUnmount() {
    itemState.unsubscribe(this.onChange)
  }

  render() {
    return (
      <div>
        <Subscribe to={[itemState]}>
          {state =>
            state.items.length === 0 ? (
              <div className="zygoteEmpty">Your cart is empty</div>
            ) : (
              <div className="zygoteStep1 zygoteStep">
                <Item />
                <Coupon />
                <div className="zygoteSubFieldsContainer">
                  <div className="zygoteSubFields">
                    <Subtotal />
                    <CouponLine
                      isMounted={state.coupon ? true : false}
                      delayTime={500}
                      animate={this.state.animate}
                    />
                    <ShippingCost />
                    <Tax />
                  </div>
                </div>
                <Total />
                <PaymentLine />
              </div>
            )
          }
        </Subscribe>
        <style jsx global>
          {styles}
        </style>
      </div>
    )
  }
}
