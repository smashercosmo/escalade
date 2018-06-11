import React, { Component } from 'react'
import { Subscribe } from 'statable'

import { cost } from '../../state'
import styles from './styles'

export default class Total extends Component {
  componentDidMount() {
    if (
      cost.state.total !==
      cost.state.subtotal + cost.state.tax + cost.state.shipping
    ) {
      cost.setState({
        total: cost.state.subtotal + cost.state.tax + cost.state.shipping
      })
    }
    cost.subscribe(state => {
      if (cost.state.total !== state.subtotal + state.tax + state.shipping) {
        cost.setState({
          total: state.subtotal + state.tax + state.shipping
        })
      }
    })
  }

  componentWillUnmount() {
    cost.unsubscribe()
  }

  render() {
    return (
      <Subscribe to={cost}>
        {state => (
          <div className="zygoteTotalLine">
            <div className="zygoteTotalHead">Total</div>
            <div className="zygoteTotal">
              ${state.total.toLocaleString(undefined, {
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
    )
  }
}
