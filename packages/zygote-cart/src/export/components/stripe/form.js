import React from 'react'
import {
	CardNumberElement,
	injectStripe,
} from 'react-stripe-elements'

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
				<CardNumberElement onChange={this.onChange} />
			</div>
		)
	}
}

export default injectStripe(StripePayment)