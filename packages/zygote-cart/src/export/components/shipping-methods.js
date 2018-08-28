import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css } from 'emotion'
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
								<ul className={listStyles}>
									{methods.map(({ id, description, value }) => (
										<li key={`shipping${id}`}>
											<label className={labelStyles}>
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

const listStyles = css({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	userSelect: `none`,
	li: {
		marginTop: 10,
	},
})

const labelStyles = css({
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
})