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
						price: products[0].price,
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
						price: products[1].price,
						stock: typeof products[0].inventory.quantity === `number`
							? products[0].inventory.quantity
							: null,
					})}>Add to Cart B</button>
				</div>


				<Cart
					header={<img className={logoStyles} src={logo} />}
					cartHeader={<div className={headerStyles}>With FREE shipping!</div>}
					cartFooter={<div className={footerStyles}>* Free shipping, except Alaska and Hawaii</div>}

					// stripeApiKey='pk_test_0EMVTB6nEzmrjGA0Fc0kyVOR'
					paypalAppId='ATP-SVtvHjAfyOGdr_8RRXgizsofojJV32mMt3WRmf5ignVi1TZkA67UYwm5sAitwETQuEigH91w70_6'
					paypalEnv='sandbox'
					infoWebhook='/.netlify/functions/info'
					orderWebhook='/.netlify/functions/order'

					totalModifications={[
						{
							id: `shipping`,
							description: `Shipping`,
							displayValue: `FREE`,
						},
						{
							id: `tax`,
							description: `Tax`,
							displayValue: `-`,
						},
					]}
				/>


			</div>
		)
	}
}

const logoStyles = css({
	maxWidth: 150,
	margin: `0 30px`,
})

const headerStyles = css({
	textAlign: `center`,
	fontWeight: `bold`,
	fontSize: `1.3em`,
})
const footerStyles = css({
	marginTop: 30,
	textAlign: `center`,
	fontSize: `.9em`,
})

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