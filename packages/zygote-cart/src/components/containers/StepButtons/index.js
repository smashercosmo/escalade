import React, { Component } from 'react'
import { Subscribe } from 'statable'
import { FoldingCube } from 'better-react-spinkit'
import cardValid from 'card-validator'
import axios from 'axios'

import { cartState, userInfo, zygoteApi, itemState, cost } from '../../state'
import { cartContent } from '../../utils'
import { resetCart, closeCart } from '../../../injectState'
import styles from './styles'

export default class StepButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }

    this.handleDetails = this.handleDetails.bind(this)
    this.handlePayment = this.handlePayment.bind(this)
    this.placeOrder = this.placeOrder.bind(this)
  }

  handleDetails(tab, cart) {
    let areErrors = false
    const { shipping } = userInfo.state
    let errors = null
    Object.keys(shipping).forEach(k => {
      if (k === 'shippingApt' || k === 'shippingCompanyName') {
        return
      }
      if (shipping[k].length === 0) {
        areErrors = true
        errors
          ? (errors = {
              ...errors,
              [k]: k => `Please enter a valid ${k}.`
            })
          : (errors = { [k]: k => `Please enter a valid ${k}.` })
      }
    })
    cartState.setState({
      errors: errors,
      tab:
        cartState.state.apiErrors || cartState.state.errors || areErrors
          ? tab
          : tab + 1
    })
  }

  handlePayment(tab, cart) {
    let areErrors = false
    const { payment, paymentAddress, addressSame } = userInfo.state
    let errors = null
    let paymentType = null
    Object.keys(payment).forEach(k => {
      if (k === 'billingNumber') {
        if (
          cardValid.number(payment[k]).isValid &&
          cardValid.number(payment[k]).card.type
        ) {
          paymentType = cardValid.number(payment[k]).card.type
        }
      }
      if (k === 'billingNumber' && !cardValid.number(payment[k]).isValid) {
        areErrors = true
        errors
          ? (errors = {
              ...errors,
              [k]: k => `Please enter a valid ${k}.`
            })
          : (errors = { [k]: k => `Please enter a valid ${k}.` })
      }
      if (
        k === 'billingExpiration' &&
        !cardValid.expirationDate(payment[k]).isValid
      ) {
        areErrors = true
        errors
          ? (errors = {
              ...errors,
              [k]: k => `Please enter a valid ${k}.`
            })
          : (errors = { [k]: k => `Please enter a valid ${k}.` })
      }
      if (
        k === 'billingSecurity' &&
        !cardValid.cvv(payment[k], paymentType === 'american-express' ? 4 : 3)
          .isValid
      ) {
        areErrors = true
        errors
          ? (errors = {
              ...errors,
              [k]: k => `Please enter a valid ${k}.`
            })
          : (errors = { [k]: k => `Please enter a valid ${k}.` })
      }
      if (payment[k].length === 0) {
        areErrors = true
        errors
          ? (errors = {
              ...errors,
              [k]: k => `Please enter a valid ${k}.`
            })
          : (errors = { [k]: k => `Please enter a valid ${k}.` })
      }
    })
    if (!addressSame) {
      Object.keys(paymentAddress).forEach(k => {
        if (k === 'billingApt' || k === 'billingCompanyName') {
          return
        }
        if (paymentAddress[k].length === 0) {
          areErrors = true
          errors
            ? (errors = {
                ...errors,
                [k]: k => `Please enter a valid ${k}.`
              })
            : (errors = { [k]: k => `Please enter a valid ${k}.` })
        }
      })
    }
    cartState.setState({
      errors: errors
    })
    if (!errors) {
      this.placeOrder(tab, areErrors)
    }
  }

  async placeOrder(tab, areErrors) {
    this.setState({ loading: true })
    const {
      preOrderInfo,
      addressSame,
      payment,
      paymentAddress
    } = userInfo.state

    let updated = { ...preOrderInfo, ...payment, addressSame }
    if (!addressSame) {
      updated = { ...updated, ...paymentAddress }
    }
    const paymentRes = await fetch(zygoteApi.state.api, {
      body: JSON.stringify(updated),
      method: 'POST'
    })
      .then(res => res.json())
      .catch(err => {
        let error = ''
        if (
          err.request &&
          (err.request.status === 404 || err.request.status === 502)
        ) {
          error = `Error with API: ${err.response.statusText}`
        } else if (err.request && err.request.status === 0 && !err.response) {
          error =
            'Something went wrong with the request, no response was given.'
        } else {
          error = err.response || JSON.stringify(err) || err
        }
        cartState.setState({
          apiErrors: [error],
          loading: false
        })
      })
    if (paymentRes) {
      this.setState({ loading: false })

      cartState.setState({
        errors: paymentRes.errors.length > 0 ? paymentRes.errors : null,
        tab:
          cartState.state.apiErrors || cartState.state.errors || areErrors
            ? tab
            : tab + 1
      })
    }
  }

  renderButtons(tab, cart) {
    switch (tab) {
      case 0:
        return (
          <div>
            {itemState.state.items.length === 0 ? null : (
              <button
                onClick={() => {
                  cartState.setState({ tab: tab + 1 })
                }}
                className="zygoteBtn zygoteCheckoutBtn"
              >
                {this.props.cartButtonOneMessage}
              </button>
            )}

            <button
              onClick={() => cartState.setState({ open: false })}
              className="zygoteBtn zygoteAltBtn"
            >
              {this.props.cartButtonTwoMessage}
            </button>
          </div>
        )

      case 1:
        return (
          <div>
            <button
              disabled={
                cartState.state.apiErrors || cart.errors || this.state.loading
                  ? true
                  : false
              }
              className={`${
                cartState.state.apiErrors || cart.errors || this.state.loading
                  ? 'zygoteBtnDisabled'
                  : 'zygoteBtn'
              } `}
              onClick={() => {
                this.handleDetails(tab, cart)
              }}
            >
              {this.props.detailsButtonMessage}
              {cart.errors ||
              cartState.state.apiErrors ||
              this.state.loading ? (
                <div className="zygoteButtonLoad">
                  <FoldingCube color="#fff" size={20} />
                </div>
              ) : null}
            </button>
          </div>
        )
      case 2:
        return (
          <div>
            <button
              disabled={
                cartState.state.apiErrors || cart.errors || this.state.loading
                  ? true
                  : false
              }
              className={`${
                cartState.state.apiErrors || cart.errors || this.state.loading
                  ? 'zygoteBtnDisabled'
                  : 'zygoteBtn'
              } `}
              onClick={() => {
                this.handlePayment(tab, cart)
              }}
            >
              {this.props.paymentButtonMessage}
              {cart.errors ||
              cartState.state.apiErrors ||
              this.state.loading ? (
                <div className="zygoteButtonLoad">
                  <FoldingCube color="#fff" size={20} />
                </div>
              ) : null}
            </button>
          </div>
        )
      case 3:
        return (
          <div>
            <button
              className="zygoteBtn zygoteAltBtn"
              onClick={() => {
                resetCart()
                closeCart()
              }}
            >
              Return Home
            </button>
          </div>
        )
    }
  }

  render() {
    const { tabs } = cartContent
    return (
      <Subscribe to={[cartState, userInfo, itemState]}>
        {(state, userState, itemState) => (
          <div className="zygoteStepBtns">
            {this.renderButtons(state.tab, state)}
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    )
  }
}

StepButtons.defaultProps = {
  cartButtonOneMessage: 'Secure Checkout',
  cartButtonTwoMessage: 'Continue Shopping',
  detailsButtonMessage: 'Next Step',
  paymentButtonMessage: 'Place Order'
}
