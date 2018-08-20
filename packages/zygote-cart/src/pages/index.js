import React from 'react'
import { Cart, openCart } from '../export'

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={() => openCart()} >Open Cart</button>
				</div>

				<Cart />
			</div>
		)
	}
}