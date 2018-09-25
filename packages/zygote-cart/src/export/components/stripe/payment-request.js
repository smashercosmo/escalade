import React from 'react'
import { PaymentRequestButtonElement } from 'react-stripe-elements'
import totalsState from '../../state/totals'
import productsState from '../../state/products'
import submitOrder from '../../utils/submit-order'

export default class PaymentRequest extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
		this.updateTotal = this.updateTotal.bind(this)
	}
	update(){
		const { stripe } = this.props
		if (!stripe) return
		if(!this.state.paymentRequest){
			this.updateTotal()
		}
		const displayItems = []
		productsState.state.products.forEach(({ name, quantity, price }) => {
			displayItems.push({
				label: `${name}${quantity > 1 ? ` (x${quantity})` : ``}`,
				amount: price * 100 * quantity,
			})
		})
		totalsState.state.modifications.forEach(({ description, value }) => {
			if (typeof value === `number`) {
				displayItems.push({
					label: description,
					amount: value,
				})
			}
		})
		const paymentRequest = stripe.paymentRequest({
			country: `US`,
			currency: `usd`,
			requestShipping: false,
			displayItems,
			total: {
				label: `Total`,
				amount: totalsState.state.total * 100,
			},
		})
		this.setState({ paymentRequest })

		paymentRequest.on(`token`, ({ complete, token }) => {
			submitOrder(token)
			complete(`success`)
		})

		paymentRequest.canMakePayment().then((result) => {
			this.setState({ canMakePayment: !!result })
		})

	}
	updateTotal(){
		if(!this.state.paymentRequest) return
		this.state.paymentRequest.update({
			currency: `usd`,
			total: {
				label: `Total`,
				amount: totalsState.state.total * 100,
			},
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
		totalsState.subscribe(this.updateTotal)
	}
	componentWillUnmount(){
		totalsState.unsubscribe(this.updateTotal)
	}
	render() {
		return this.state.canMakePayment ? (
			<div className='zygotePaymentRequest'>
				<PaymentRequestButtonElement
					paymentRequest={this.state.paymentRequest}
					className='PaymentRequestButton'
				/>
				<div className='zygotePaymentRequestDivider'>Or enter card your information</div>
			</div>
		) : null
	}
	static styles = () => ({
		'.zygotePaymentRequest': {
			marginTop: 10,
		},
		'.zygotePaymentRequestDivider': {
			marginTop: 30,
			textAlign: `center`,
		},
	})
}