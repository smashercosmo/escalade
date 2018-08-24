import React from 'react'
import {
	injectStripe,
	CardExpiryElement,
} from 'react-stripe-elements'
import CardNumber from './card-number'

class StripePayment extends React.Component {
	constructor(props) {
		super(props)
	}
	onChange(e){
		console.log(e)
	}
	render() {
		return (
			<div>
				<CardNumber />
				<CardExpiryElement onChange={this.onChange} />
			</div>
		)
	}
}

export default injectStripe(StripePayment)