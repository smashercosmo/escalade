import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import closeCart from '../../utils/close-cart'
import ProductList from '../product-list'
import Button from '../button'
import productsState from '../../state/products'
import Totals from '../totals'
import nextStage from '../../utils/next-stage'
import CardList from '../card-list'

export default class CartStage extends React.Component{
	render() {
		const {
			cartHeader,
			cartFooter,
			addedToCart,
		} = this.props
		return (
			<Fragment>
				{!!cartHeader && (
					<div className={headerStyles}>{cartHeader}</div>
				)}
				<Subscribe to={productsState}>
					{({ products }) => (
						<Fragment>
							{!!products.length && !!addedToCart && (
								<div className={headerStyles}>{addedToCart}</div>
							)}
							<ProductList editable />
							{!products.length && (
								<div className={emptyMessageStyles}>Your cart is empty</div>
							)}
							{!!products.length && (
								<Fragment>
									<Totals />
									<div className={cardListStyles}>
										<CardList />
									</div>
									<Button onClick={nextStage}>Place Order</Button>
								</Fragment>
							)}
							<Button secondary onClick={closeCart}>Continue Shopping</Button>
						</Fragment>
					)}
				</Subscribe>
				{!!cartFooter && (
					<div className={footerStyles}>{cartFooter}</div>
				)}
			</Fragment>
		)
	}
}

const headerStyles = css({
	marginBottom: 20,
})

const footerStyles = css({
	marginTop: 20,
})

const emptyMessageStyles = css({
	textAlign: `center`,
	marginTop: 30,
	marginBottom: 30,
})

const cardListStyles = css({
	textAlign: `center`,
})