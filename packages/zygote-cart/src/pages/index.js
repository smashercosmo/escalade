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
						title: `7.5' Covington Billiard Table`,
						image: `https://images.salsify.com/image/upload/s--5scl3VX0--/w_75,h_75,c_pad/g8gkpmmhuhqzrqxu6boh.jpg`,
						description: `Beautiful and refined, the 8' Minnesota Fats Covington Pool Table with Dur-A-Bond play bed will make a stunning centerpiece for your game room. Carved...`,
						price: 1399,
					})}>Add to Cart A</button>
				</div>
				<div>
					<button onClick={() => addToCart({
						id: `PRODUCT125`,
						title: `Raptor Table Tennis Racket`,
						image: `https://images.salsify.com/image/upload/s--7evRfexQ--/w_75,h_75,c_pad/qdppgggttnkespgpupdz.jpg`,
						description: `The STIGA Raptor is a perfect blend of cutting-edge technologies and advanced materials. The Raptor will allow you to experience the extreme power and...`,
						price: 109.99,
					})}>Add to Cart B</button>
				</div>
				<Cart
					logo='BRAND LOGO'
				/>
			</div>
		)
	}
}