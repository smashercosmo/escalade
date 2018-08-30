import React from 'react'
import { css } from 'emotion'
import { Cart, openCart, addToCart } from '../export'
import logo from '../img/logo.svg'

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={openCart} >Open Cart</button>
				</div>
				<div>
					<button onClick={() => addToCart({
						id: `TESTA`,
						title: `7.5' Covington Billiard Table`,
						image: `https://images.salsify.com/image/upload/s--5scl3VX0--/w_75,h_75,c_pad/g8gkpmmhuhqzrqxu6boh.jpg`,
						description: `Beautiful and refined, the 8' Minnesota Fats Covington Pool Table with Dur-A-Bond play bed will make a stunning centerpiece for your game room. Carved...`,
						price: 9.99,
						//stock: 2,
					})}>Add to Cart A</button>
				</div>
				<div>
					<button onClick={() => addToCart({
						id: `TESTB`,
						title: `Raptor Table Tennis Racket`,
						image: `https://images.salsify.com/image/upload/s--7evRfexQ--/w_75,h_75,c_pad/qdppgggttnkespgpupdz.jpg`,
						description: `A short description.`,
						price: 109.99,
					})}>Add to Cart B</button>
				</div>


				<Cart
					header={<img className={logoStyles} src={logo} />}
					stripeApiKey='pk_test_0EMVTB6nEzmrjGA0Fc0kyVOR'

					// cartHeader={<div className={headerStyles}>With FREE shipping!</div>}
					// cartFooter={<div>* Free shipping, except Alaska and Hawaii</div>}

					infoEndpoint='/.netlify/functions/info'
					orderEndpoint='/.netlify/functions/order'

					// totalModifications={[
					// 	{
					// 		id: `shipping`,
					// 		description: `Shipping`,
					// 		displayValue: `FREE`,
					// 	},
					// 	{
					// 		id: `tax`,
					// 		description: `Tax`,
					// 		displayValue: `-`,
					// 	},
					// ]}
				/>


			</div>
		)
	}
}

const logoStyles = css({
	maxWidth: 150,
	margin: `0 30px`,
})

// const headerStyles = css({
// 	textAlign: `center`
// })