import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import productsState, { removeFromCart } from '../state/products'

export default class CartStep extends React.Component{
	render() {
		const {
			cartMessage,
		} = this.props
		return (
			<div>
				{cartMessage && (
					<div className={cartMessageStyles}>{cartMessage}</div>
				)}
				<Subscribe to={productsState}>
					{({ products }) => (
						<Fragment>
							{!!products.length && (
								<ul>
									{products.map(({
										image,
										title,
										description,
										quantity,
										id,
										price,
									}, key) => (
										<li key={`cartProd${key}`}>
											<div>
												<img src={image} />
											</div>
											<div>{title}</div>
											<div>{description}</div>
											<div>{quantity}</div>
											<div>${price.toFixed(2)}</div>
											<div onClick={() => removeFromCart(id)}>×</div>
										</li>
									))}
								</ul>
							)}
							{!products.length && (
								<div>Your cart is empty</div>
							)}
						</Fragment>
					)}
				</Subscribe>
			</div>
		)
	}
}


const cartMessageStyles = css({
	textAlign: `center`,
	fontStyle: `italic`,
})