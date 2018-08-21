import React from 'react'
import { css } from 'emotion'
import ProductList from './product-list'
import Button from './button'
import CouponInput from './coupon-input'

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
				<div className={listStyles}>
					<ProductList editable />
					<CouponInput />
				</div>
				<Button>Place Order</Button>
				<Button secondary>Continue Shopping</Button>
			</div>
		)
	}
}


const cartMessageStyles = css({
	textAlign: `center`,
	fontStyle: `italic`,
})

const listStyles = css({
	marginTop: 30,
	marginBottom: 30,
	padding: `20px 0`,
	borderTop: `1px solid #333`,
	borderBottom: `1px solid #333`,
})