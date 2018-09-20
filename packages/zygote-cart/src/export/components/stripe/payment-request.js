import React from 'react'
import { PaymentRequestButtonElement } from 'react-stripe-elements'
import totalsState from '../../state/totals'

export default class PaymentRequest extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	update(){
		const { stripe } = this.props
		if (!stripe) return
		console.log(`Updating request payment...`)
		const paymentRequest = stripe.paymentRequest({
			country: `US`,
			currency: `usd`,
			total: {
				label: `Demo total`,
				amount: totalsState.state.total * 100,
			},
		})
		paymentRequest.on(`token`, ({ complete, token, ...data }) => {
			console.log(`Received Stripe token: `, token)
			console.log(`Received customer information: `, data)
			complete(`success`)
		})

		paymentRequest.canMakePayment().then((result) => {
			console.log(`canMakePayment`, result)
			this.setState({ canMakePayment: !!result })
		})
	}
	componentDidUpdate(){
		const { stripe } = this.props
		if(!stripe || this.state.stripe) return
		this.setState({ stripe })
		this.update()
	}
	componentDidMount(){
		this.update()
	}
	render() {
		return this.state.canMakePayment ? (
			<PaymentRequestButtonElement
				paymentRequest={this.state.paymentRequest}
				className="PaymentRequestButton"
				style={{
					// For more details on how to style the Payment Request Button, see:
					// https://stripe.com/docs/elements/payment-request-button#styling-the-element
					paymentRequestButton: {
						theme: `light`,
						height: `64px`,
					},
				}}
			/>
		) : null
	}
}