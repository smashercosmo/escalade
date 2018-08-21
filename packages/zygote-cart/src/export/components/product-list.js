import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import productsState, {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from '../state/products'

export default class ProductList extends React.Component{
	render() {
		const { editable } = this.props
		return (
			<Subscribe to={productsState}>
				{({ products }) => (
					<Fragment>
						{!!products.length && (
							<Fragment>
								<ul className={productListStyles}>
									{products.map(({
										image,
										title,
										description,
										quantity,
										id,
										price,
									}, key) => (
										<li
											key={`cartProd${key}`}
											className={productItemStyles}
										>
											<div className={imageStyles}>
												<img src={image} />
											</div>
											<div className={titleStyles}>
												{title}
											</div>
											<div className={descriptionStyles}>
												{description}
											</div>
											<div className={quantityStyles}>
												{editable && (
													<div
														role='button'
														onClick={() => decreaseQuantity(id)}
													>-</div>
												)}
												<div>{quantity}</div>
												{editable && (
													<div
														role='button'
														onClick={() => increaseQuantity(id)}
													>+</div>
												)}
											</div>
											<div className={priceStyles}>${price.toFixed(2)}</div>
											{editable && (
												<div
													className={xStyles}
													onClick={() => removeFromCart(id)}
												>×</div>
											)}
										</li>
									))}
								</ul>
							</Fragment>
						)}
						{!products.length && (
							<div>Your cart is empty</div>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
}

const priceStyles = css({
	width: `50%`,
	textAlign: `right`,
})

const quantityStyles = css({
	width: `50%`,
	div: {
		display: `inline-block`,
		':nth-of-type(2)': {
			padding: `0 5px`,
			textAlign: `center`,
			minWidth: 40,
		},
	},
})

const xStyles = css({
	position: `absolute`,
	top: 0,
	right: 0,
	fontSize: `2em`,
	lineHeight: `16px`,
	fontWeight: 200,
	cursor: `pointer`,
})

const imageStyles = css({
	width: `100%`,
	maxWidth: 75,
	textAlign: `center`,
})

const titleStyles = css({
	marginTop: 10,
	fontWeight: `bold`,
	width: `100%`,
})

const descriptionStyles = css({
	width: `100%`,
	marginBottom: 10,
	marginTop: 10,
	fontSize: `.75em`,
})

const productListStyles = css({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	':after': {
		content: `""`,
		display: `block`,
		clear: `both`,
	},
})

const productItemStyles = css({
	position: `relative`,
	':after': {
		content: `""`,
		display: `block`,
		clear: `both`,
	},
	'> div': {
		float: `left`,
	},
})