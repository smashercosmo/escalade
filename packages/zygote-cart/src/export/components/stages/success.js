import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import ProductList from '../product-list'
import Totals from '../totals'
import successState from '../../state/success'
import Button from '../button'
import closeCart from '../../utils/close-cart'

export default class SuccessStage extends React.Component{
	render() {
		return (
			<div>
				<h1 className={headerStyles}>Order Received!</h1>
				<Subscribe to={successState}>
					{({ products, totals, meta }) => (
						<Fragment>
							<h2>Detailed Order Receipt</h2>
							<div className={metaStyles}>
								{meta.orderNumber && (
									<div>Order Number: {meta.orderNumber}</div>
								)}
								{meta.orderDate && (
									<div>Order Date: {meta.orderDate}</div>
								)}
							</div>
							<ProductList products={products} editable={false} />
							<Totals totals={totals} />
						</Fragment>
					)}
				</Subscribe>
				<div className={buttonContainerStyles}>
					<Button onClick={closeCart}>Close Cart</Button>
				</div>
			</div>
		)
	}
}

const headerStyles = css({
	textAlign: `center`,
})

const metaStyles = css({
	marginBottom: 20,
	fontSize: `.9em`,
})

const buttonContainerStyles = css({
	marginTop: 30,
})