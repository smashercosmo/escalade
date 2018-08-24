import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { css } from 'emotion'
import CardNumber from './card-number'
import Expiration from './expiration'
import Cvc from './cvc'
import ZipCode from './zip-code'

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
				<div className={rowStyles}>
					<div>
						<Expiration />
					</div>
					<div>
						<Cvc />
					</div>
				</div>
				<ZipCode />
			</div>
		)
	}
}

const rowStyles = css({
	display: `flex`,
	'> div': {
		width: `50%`,
		padding: `0 10px`,
		':first-of-type': {
			paddingLeft: 0,
		},
		':last-of-type': {
			paddingRight: 0,
		},
	},
})

export default injectStripe(StripePayment)