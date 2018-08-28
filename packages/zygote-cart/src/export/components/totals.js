import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css } from 'emotion'
import totalsState from '../state/totals'
import { borderColor } from '../styles'
import LoadingAnimation from './loading-animation'
import formatUsd from '../utils/format-usd'

class TotalsList extends React.Component{
	render(){
		const { subtotal, modifications, total, loading } = this.props.totals
		if(!total) return null
		return (
			<Fragment>
				<li>
					<div>Subtotal</div>
					<div>${subtotal.toFixed(2)}</div>
				</li>
				{loading && (
					<li>
						<LoadingAnimation />
					</li>
				)}
				{!loading && (
					<Fragment>
						{modifications.map(({
							description,
							displayValue,
							alteration,
						}, index) => (
							<li key={`mod${index}`}>
								<div>{description}</div>
								<div>{displayValue || formatUsd(alteration)}</div>
							</li>
						))}
						<li className={totalStyles}>
							<div>Total</div>
							<div>${total.toFixed(2)}</div>
						</li>
					</Fragment>
				)}
			</Fragment>
		)
	}
}

export default class Totals extends React.Component{
	render(){
		const { totals } = this.props
		return (
			<ul className={listStyles}>
				{totals && (
					<TotalsList totals={totals} />
				)}
				{!totals && (
					<Subscribe to={totalsState}>
						{totals => (
							<TotalsList totals={totals} />
						)}
					</Subscribe>
				)}
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
		'> div': {
			width: `50%`,
			float: `left`,
			':last-of-type': {
				textAlign: `right`,
			},
		},
	},
})

const totalStyles = css({
	fontWeight: `bold`,
	paddingTop: 20,
	borderTop: `1px solid ${borderColor}`,
})