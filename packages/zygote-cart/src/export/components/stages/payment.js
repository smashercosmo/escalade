import React from 'react'
import { css } from 'emotion'
import StagesHeader from '../stages-header'
import Header from '../header'
import CardList from '../card-list'

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
			},
		},
	},
})