import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import { Subscribe } from 'statable'
import settingsState from '../state/settings'
import totalsState from '../state/totals'
import submitOrder from '../utils/submit-order'

export default class Paypal extends React.Component {
	render() {
		return (
			<Subscribe to={[settingsState, totalsState]}>
				{({ paypalAppId, paypalEnv=`production` }, { total }) => (
					<PaypalExpressBtn
						client={{
							sandbox: paypalAppId,
							production: paypalAppId,
						}}
						currency='USD'
						env={paypalEnv}
						total={total / 100}
						shipping={1}
						onError={err => console.error(err)}
						onSuccess={token => {
							submitOrder({
								token,
								type: `paypal`,
							})
						}}
					/>
				)}
			</Subscribe>
		)
	}
}