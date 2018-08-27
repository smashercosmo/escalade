import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import shippingState from '../state/shipping'
import LoadingAnimation from './loading-animation'

export default class ShippingMethods extends React.Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		shippingState.setState({
			selected: e.target.value,
		})
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
								<ul>
									{methods.map(({ id, description }) => (
										<li key={`shipping${id}`}>
											<label>
												<input
													type='radio'
													name='zygoteShipping'
													value={id}
													checked={selected === id}
													onChange={this.handleChange}
												/>
												<span>{description}</span>
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