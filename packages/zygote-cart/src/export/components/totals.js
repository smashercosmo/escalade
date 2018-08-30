import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import totalsState from '../state/totals'
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
							value,
						}, index) => (
							<li key={`mod${index}`}>
								<div>{description}</div>
								<div>{displayValue || formatUsd(value)}</div>
							</li>
						))}
						<li className='zygoteGrandTotal'>
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
			<ul className='zygoteTotals'>
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