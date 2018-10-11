import React from 'react'
import PaypalExpressBtn from './button'
import { Subscribe } from 'statable'
import settingsState from '../../state/settings'
import totalsState from '../../state/totals'
import submitOrder from '../../utils/submit-order'

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
						env={paypalEnv}
						shipping={1}
						onError={err => console.error(err)}
						onSuccess={token => {
							submitOrder({
								token,
								type: `paypal`,
							})
						}}
						transaction={{
							amount: {
								total: total / 100,
								currency: `USD`,
							},
						}}
					/>
				)}
			</Subscribe>
		)
	}
}