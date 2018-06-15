import React, { Component } from 'react'
import { Subscribe } from 'statable'

import { cartState, itemState } from '../../state'
import { cartContent } from '../../utils'
import { Header, Footer, Content, StepButtons } from '../../containers'
import styles from './styles'
import AnimateHOC from '../../utils/AnimateHOC'

class Cart extends Component {
  render() {
    const { tabs } = cartContent
    return (
      <Subscribe to={cartState}>
        {state => (
          <div>
            <Header
              brandLogo={this.props.brandLogo}
              cartHeader={this.props.cartHeader}
              addToCartMessage={this.props.addToCartMessage}
              orderCompleteTitle={this.props.orderCompleteTitle}
              orderCompleteBody={this.props.orderCompleteBody}
            />
            <div className="zygoteForm">
              <Content
                googleApiKey={this.props.googleApiKey}
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
    )
  }
}

const AnimateComp = AnimateHOC(Cart)

export default class App extends Component {
  render() {
    return (
      <Subscribe to={cartState}>
        {state => (
          <div onClick={e => e.stopPropagation()}>
            <AnimateComp
              isMounted={state.open}
              base="zygoteModal"
              action="zygoteModalAction"
              delayTime={500}
              animate={true}
              {...this.props}
            />
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    )
  }
}
