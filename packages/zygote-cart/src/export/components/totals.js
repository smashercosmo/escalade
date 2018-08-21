import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import totalsState from '../state/totals'

export default class Totals extends React.Component{
	render(){
		return (
			<ul>
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
							<li>
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