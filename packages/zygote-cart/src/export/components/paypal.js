import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import { Subscribe } from 'statable'
import settingsState from '../state/settings'
import totalsState from '../state/totals'

export default class Paypal extends React.Component {
	render() {
		return (
			<Subscribe to={[settingsState, totalsState]}>
				{({ paypalAppId }, { total }) => (
					<PaypalExpressBtn
						client={{ sandbox: paypalAppId }}
						currency='USD'
						env='sandbox'
						total={total / 100}
						onError={err => console.error(err)}
						onSuccess={payment => console.log(payment)}
					/>
				)}
			</Subscribe>
		)
	}
}