import React, { Component } from 'react'
import { Subscribe } from 'statable'

import styles from './styles'
import { userInfo } from '../../state'
import { OrderSummary } from '../../containers'

export default class YourOrder extends Component {
  render() {
    return (
      <Subscribe to={userInfo}>
        {user => (
          <div className="zygoteStep4 zygoteStep">
            <div className="zygoteTable">
              <div className="zygoteRow">
                <div className="zygoteEmailConfirmation">
                  You will soon receive an email confirmation at:
                </div>
                <div className="zygoteUserEmail">
                  {user.shipping.shippingEmail}
                </div>
              </div>
              <div className="zygoteRow">
                <div className="zygoteOrderReview">
                  <div className="zygoteOrderReviewTitle">
                    Detailed Order Receipt
                  </div>
                  <div className="zygoteOrderSpecs">
                    <p>Order Number: 1234567</p>
                    <p>Order Date: {new Date().toLocaleString()}</p>
                  </div>
                  <div className="zygoteDetailsInfo">
                    <div className="zygoteShippingDetials">
                      Ship to:
                      <p>{user.shipping.shippingFullName}</p>
                      <p>{user.shipping.shippingAddress}</p>
                      <p>
                        {user.shipping.shippingCity},{' '}
                        {user.shipping.shippingState}{' '}
                        {user.shipping.shippingZip}
                      </p>
                    </div>
                    <div className="zygoteBillingDetials">
                      <div>Bill to:</div>

                      {user.addressSame ? (
                        <div>
                          <p>{user.shipping.shippingFullName}</p>
                          <p>{user.shipping.shippingAddress}</p>
                          <p>
                            {user.shipping.shippingCity},{' '}
                            {user.shipping.shippingState}{' '}
                            {user.shipping.shippingZip}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p>{user.shipping.shippingFullName}</p>
                          <p>{user.paymentAddress.billingAddress}</p>
                          <p>
                            {user.paymentAddress.billingCity},{' '}
                            {user.paymentAddress.billingState}{' '}
                            {user.paymentAddress.billingZip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="zygoteRow">
                <OrderSummary isMounted={true} />
              </div>
              {this.props.ccPhone ? (
                <div className="zygoteContactNumber">
                  <div>Customer Service</div>
                  {this.props.ccPhone}
                </div>
              ) : null}
            </div>
            <style jsx>{styles}</style>
          </div>
        )}
      </Subscribe>
    )
  }
}
