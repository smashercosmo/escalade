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
			<Subscribe to={shippingState}>
				{({ loading, selected, methods }) => (
					<Fragment>
						{loading && (
							<LoadingAnimation />
						)}
						{!loading && !!methods.length && (
							<div className='zygoteShipMethods'>
								<h2>Shipping Options</h2>
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
							</div>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
	static styles = ({ altBackgroundColor, altBorderColor }) => ({
		'.zygoteShipMethods': {
			background: altBackgroundColor,
			border: `1px solid ${altBorderColor}`,
			borderRight: 0,
			borderLeft: 0,
			margin: `50px -20px`,
			padding: `30px 20px`,
			h2: {
				marginTop: 0,
			},
		},
		'.zygoteShipList': {
			listStyleType: `none`,
			userSelect: `none`,
			margin: 0,
			padding: 0,
			li: {
				marginTop: 10,
			},
		},
		'.zygoteShipLabel': {
			display: `flex`,
			cursor: `pointer`,
			position: `relative`,
			'> div': {
				':first-of-type': {
					width: `10%`,
				},
				':nth-of-type(2)': {
					width: `70%`,
				},
				':last-of-type': {
					width: `20%`,
					textAlign: `right`,
				},
			},
		},
	})
}