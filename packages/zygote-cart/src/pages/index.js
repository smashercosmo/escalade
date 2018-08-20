import React from 'react'
import { Cart, openCart, addToCart } from '../export'

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={openCart} >Open Cart</button>
				</div>
				<div>
					<button onClick={() => addToCart({

						id: `PRODUCT123`,
						title: `Some Product`,
						image: `https://images.salsify.com/image/upload/s--3wFoD9gQ--/w_100,h_100,c_pad/apxmt9fh9lnhmia9m0df.jpg`,
						description: `This is a product description.`,
						price: 19.99,

					})}>Add to Cart</button>
				</div>
				<Cart
					logo='BRAND LOGO'
				/>
			</div>
		)
	}
}