import React from 'react'
import StagesHeader from '../stages-header'

export default class PaymentStage extends React.Component{
	render() {
		return (
			<form autoComplete='on'>
				<StagesHeader stage='payment' />
			</form>
		)
	}
}