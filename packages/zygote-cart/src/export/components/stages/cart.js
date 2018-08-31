import React, { Fragment } from 'react'
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
					<div className='zygoteCartHeader'>{cartHeader}</div>
				)}
				<Subscribe to={productsState}>
					{({ products }) => (
						<Fragment>
							{!!products.length && !!addedToCart && (
								<div className='zygoteCartHeader'>{addedToCart}</div>
							)}
							<ProductList editable />
							{!products.length && (
								<div className='zygoteEmptyMsg'>Your cart is empty</div>
							)}
							{!!products.length && (
								<Fragment>
									<Totals />
									<div className='zygoteCardListWrapper'>
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
					<div className='zygoteCartFooter'>{cartFooter}</div>
				)}
			</Fragment>
		)
	}
	static styles = () => ({
		'.zygoteCartHeader': {
			marginBottom: 20,
		},
		'.zygoteCartFooter': {
			marginTop: 20,
		},
		'.zygoteEmptyMsg': {
			textAlign: `center`,
			marginTop: 30,
			marginBottom: 30,
		},
		'.zygoteCardListWrapper': {
			textAlign: `center`,
		},
	})
}