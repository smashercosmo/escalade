import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import SmallButton from './small-button'
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
													<SmallButton
														onClick={() => decreaseQuantity(id)}
														secondary
													>-</SmallButton>
												)}
												<div className={quantityNumberStyles}>{quantity}</div>
												{editable && (
													<SmallButton
														onClick={() => increaseQuantity(id)}
														secondary
													>+</SmallButton>
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
	position: `absolute`,
	top: 23,
	right: 35,
})

const quantityStyles = css({
	position: `absolute`,
	left: 85,
	top: 23,
	zIndex: 2,
})

const quantityNumberStyles = css({
	padding: `0 5px`,
	textAlign: `center`,
	minWidth: 30,
	display: `inline-block`,
	top: -3,
	position: `relative`,
})

const xStyles = css({
	position: `absolute`,
	top: 21,
	right: 0,
	fontSize: `2em`,
	lineHeight: `16px`,
	fontWeight: 200,
	cursor: `pointer`,
})

const imageStyles = css({
	width: `100%`,
	maxWidth: 65,
	textAlign: `center`,
})

const titleStyles = css({
	marginTop: 5,
	fontWeight: `bold`,
	width: `100%`,
})

const descriptionStyles = css({
	width: `100%`,
	marginBottom: 10,
	marginTop: 5,
	fontSize: `.75em`,
})

const productListStyles = css({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	'> li': {
		margin: `10px 0`,
		':first-of-type': {
			marginTop: 0,
		},
		':last-of-type': {
			marginBottom: 0,
		},
	},
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