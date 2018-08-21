import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css } from 'emotion'
import totalsState from '../state/totals'
import { borderColor } from '../styles'

export default class Totals extends React.Component{
	render(){
		return (
			<ul className={listStyles}>
				<Subscribe to={totalsState}>
					{({ subtotal, modifications, total }) => (
						<Fragment>
							<li>
								<div>Subtotal</div>
								<div>${subtotal.toFixed(2)}</div>
							</li>
							{modifications.map(({
								description,
								displayValue,
							}, index) => (
								<li key={`mod${index}`}>
									<div>{description}</div>
									<div>{displayValue}</div>
								</li>
							))}
							<li className={totalStyles}>
								<div>Total</div>
								<div>${total.toFixed(2)}</div>
							</li>
						</Fragment>
					)}
				</Subscribe>
			</ul>
		)
	}
}

const listStyles = css({
	listStyleType: `none`,
	margin: 0,
	marginTop: 30,
	marginBottom: 30,
	padding: 0,
	borderTop: `1px solid ${borderColor}`,
	li: {
		margin: `10px 0`,
		':after': {
			content: `""`,
			display: `block`,
			clear: `both`,
		},
	},
	div: {
		width: `50%`,
		float: `left`,
		':last-of-type': {
			textAlign: `right`,
		},
	},
})

const totalStyles = css({
	fontWeight: `bold`,
	paddingTop: 20,
	borderTop: `1px solid ${borderColor}`,
})