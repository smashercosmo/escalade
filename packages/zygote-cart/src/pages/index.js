import React from 'react'
import { css } from 'emotion'
import { Cart, openCart, addToCart } from '../export'
import logo from '../img/logo.svg'

export default class HomePage extends React.Component {
	render() {
		let products = this.props.data.allStripeSku.edges.map(edge => edge.node)
		return (
			<div>
				<div>
					<button onClick={openCart} >Open Cart</button>
				</div>
				<div>
					<button onClick={() => addToCart({
						id: products[0].id,
						name: `7.5' Covington Billiard Table`,
						image: `https://images.salsify.com/image/upload/s--5scl3VX0--/w_75,h_75,c_pad/g8gkpmmhuhqzrqxu6boh.jpg`,
						description: `Beautiful and refined, the 8' Minnesota Fats Covington Pool Table with Dur-A-Bond play bed will make a stunning centerpiece for your game room. Carved...`,
						price: products[0].price / 100,
						stock: typeof products[0].inventory.quantity === `number`
							? products[0].inventory.quantity
							: null,
					})}>Add to Cart A</button>
				</div>
				<div>
					<button onClick={() => addToCart({
						id: products[1].id,
						name: `Raptor Table Tennis Racket`,
						image: `https://images.salsify.com/image/upload/s--7evRfexQ--/w_75,h_75,c_pad/qdppgggttnkespgpupdz.jpg`,
						description: `A short description.`,
						price: products[1].price / 100,
						stock: typeof products[0].inventory.quantity === `number`
							? products[0].inventory.quantity
							: null,
					})}>Add to Cart B</button>
				</div>


				<Cart
					header={<img className={logoStyles} src={logo} />}
					stripeApiKey='pk_test_0EMVTB6nEzmrjGA0Fc0kyVOR'

					// cartHeader={<div className={headerStyles}>With FREE shipping!</div>}
					// cartFooter={<div>* Free shipping, except Alaska and Hawaii</div>}

					infoEndpoint='/.netlify/functions/info'
					// infoEndpoint='/.netlify/functions/info-multi-ship'
					orderEndpoint='/.netlify/functions/order'

					onOpen={() => console.log(`Cart opened`)}
					onClose={() => console.log(`Cart closed`)}
					onAddProduct={product => console.log(`Added product`, product)}
					onRemoveProduct={product => console.log(`Removed product`, product)}
					onInfoAttempt={info => console.log(`Info attempt`, info)}
					onInfo={info => console.log(`Info submit`, info)}
					onOrderAttempt={order => console.log(`Order attempt`, order)}
					onOrder={order => console.log(`Order submit`, order)}
					onError={err => console.log(`Error caught`, err)}

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


export const query = graphql`
	query HomePage {
		allStripeSku{
			edges{
				node{
					id
					inventory{
						type
						quantity
					}
					price
				}
			}
		}
	}
`