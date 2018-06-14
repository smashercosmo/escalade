import React, { Component } from 'react'
import { Subscribe } from 'statable'

import styles from './styles'
import { itemState } from '../../state'
import {
  Item,
  Subtotal,
  ShippingCost,
  Tax,
  Total,
  CouponLine
} from '../../containers'

class OrderSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: '',
      isMounted: true
    }
  }

  componentDidMount() {
    if (this.props.animate) {
      setTimeout(() => {
        this.setState({ class: 'zygoteAnimAction' })
      }, 0)
    }
  }

  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div
            className={`zygoteOrderSummaryContainer ${this.props.animate &&
              'zygoteAnim'} ${this.state.class}`}
          >
            <Item />
            <div className="zygoteSubFieldsContainer">
              <div className="zygoteSubFields">
                <Subtotal />
                {state.coupon ? (
                  <CouponLine animate={this.props.animateCoupon} />
                ) : null}
                <ShippingCost />
                <Tax />
              </div>
            </div>
            <Total />
            <style jsx>{styles}</style>
          </div>
        )}
      </Subscribe>
    )
  }
}
export default OrderSummary
