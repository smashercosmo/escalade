import React from 'react'
import { css } from 'emotion'
import StagesHeader from '../stages-header'
import Header from '../header'
import CardList from '../card-list'
import StripePayment from '../stripe'
import Button from '../button'
import nextStage from '../../utils/next-stage'

export default class PaymentStage extends React.Component{
	render() {
		return (
			<form autoComplete='on'>
				<StagesHeader stage='payment' />
				<div className={sectionStyles}>
					<div className={headerRowStyles}>
						<div>
							<Header>Payment</Header>
						</div>
						<div>
							<CardList />
						</div>
					</div>
					<StripePayment />
				</div>
				<div className={buttonContainerStyles}>
					<Button onClick={nextStage}>Place Order</Button>
				</div>
			</form>
		)
	}
}

const sectionStyles = css({
	marginTop: 40,
})

const headerRowStyles = css({
	'@media(min-width: 500px)': {
		display: `flex`,
		'> div': {
			':first-of-type': {
				width: `40%`,
			},
			':last-of-type': {
				width: `60%`,
				textAlign: `right`,
				marginTop: 5,
			},
		},
	},
})

const buttonContainerStyles = css({
	marginTop: 30,
})