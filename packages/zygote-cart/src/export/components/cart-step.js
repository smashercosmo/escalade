import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import { closeCart } from '../state/open'
import ProductList from './product-list'
import Button from './button'
import productsState from '../state/products'
import Totals from './totals'
import CouponInput from './coupon-input'

export default class CartStep extends React.Component{
	render() {
		const { cartHeader } = this.props
		return (
			<Fragment>
				{!!cartHeader && (
					<div className={headerStyles}>{cartHeader}</div>
				)}
				<Subscribe to={productsState}>
					{({ products }) => (
						<Fragment>
							<ProductList editable />
							{!products.length && (
								<div className={emptyMessageStyles}>Your cart is empty</div>
							)}
							{!!products.length && (
								<Fragment>
									<CouponInput />
									<Totals />
									<Button>Place Order</Button>
								</Fragment>
							)}
							<Button secondary onClick={closeCart}>Continue Shopping</Button>
						</Fragment>
					)}
				</Subscribe>
			</Fragment>
		)
	}
}

const headerStyles = css({
	marginBottom: 20,
})

const emptyMessageStyles = css({
	textAlign: `center`,
	marginTop: 30,
	marginBottom: 30,
})
