import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import productsState from '../state/products'
import Item from './product-list-item'
import Totals from './totals'

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
									{products.map((product, key) => (
										<Item
											editable={editable}
											key={`cartProd${key}`}
											{...product}
										/>
									))}
								</ul>
								<Totals />
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