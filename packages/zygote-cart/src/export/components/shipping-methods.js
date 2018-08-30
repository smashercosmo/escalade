import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import shippingState from '../state/shipping'
import LoadingAnimation from './loading-animation'
import setShipping from '../utils/set-shipping'
import formatUsd from '../utils/format-usd'
import Radio from './inputs/radio'

export default class ShippingMethods extends React.Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		setShipping(e.target.value)
	}
	render() {
		return (
			<div>
				<h2>Shipping Options</h2>
				<Subscribe to={shippingState}>
					{({ loading, selected, methods }) => (
						<Fragment>
							{loading && (
								<LoadingAnimation />
							)}
							{!loading && (
								<ul className='zygoteShipList'>
									{methods.map(({ id, description, value }) => (
										<li key={`shipping${id}`}>
											<label className='zygoteShipLabel'>
												<div>
													<Radio
														type='radio'
														name='zygoteShipping'
														value={id}
														checked={selected === id}
														onChange={this.handleChange}
													/>
												</div>
												<div>{description}</div>
												<div>{formatUsd(value)}</div>
											</label>
										</li>
									))}
								</ul>
							)}
						</Fragment>
					)}
				</Subscribe>
			</div>
		)
	}
}