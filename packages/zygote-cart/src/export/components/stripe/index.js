import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import settingsState from '../../state/settings'
import StripeForm from './form'

export default class StripeWrapper extends React.Component {
	constructor(props){
		super(props)
		this.state = { stripe: null }
	}
	componentDidMount() {
		if (window.Stripe) {
			this.init()
		}
		else {
			const script = document.createElement(`script`)
			script.src = `https://js.stripe.com/v3/`
			script.addEventListener(`load`, () => this.init())
			document.body.appendChild(script)
		}
	}
	init() {
		this.setState({
			stripe: window.Stripe(settingsState.state.stripeApiKey),
		})
	}
	render() {
		return (
			<StripeProvider stripe={this.state.stripe}>
				<Elements>
					<StripeForm />
				</Elements>
			</StripeProvider>
		)
	}
}