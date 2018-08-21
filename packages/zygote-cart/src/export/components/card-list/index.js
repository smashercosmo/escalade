import React from 'react'
import { css } from 'emotion'
import Security from './security'
import Visa from './visa'
import Mastercard from './mastercard'
import AmericanExpress from './american-express'
import Discover from './discover'

export default class CardList extends React.Component {
	render() {
		return (
			<div className={cardListStyles}>
				<div>
					<Security />
				</div>
				<div>
					<Visa />
				</div>
				<div>
					<Mastercard />
				</div>
				<div>
					<AmericanExpress />
				</div>
				<div>
					<Discover />
				</div>
			</div>
		)
	}
}

const cardListStyles = css({
	textAlign: `center`,
	marginBottom: 20,
	div: {
		width: 33,
		display: `inline-block`,
		margin: `0 3px`,
		':first-of-type': {
			width: 35,
		},
	},
})