import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import ProductList from '../product-list'
import Totals from '../totals'
import successState from '../../state/success'

export default class SuccessStage extends React.Component{
	render() {
		return (
			<div>
				<h1 className={headerStyles}>Your order is in!</h1>
				<div className={messageStyles}>You will soon receive an email confirmation with your order details.</div>
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
			</div>
		)
	}
}

const headerStyles = css({
	textAlign: `center`,
})

const messageStyles = css({
	marginBottom: 30,
})

const metaStyles = css({
	marginBottom: 20,
	fontSize: `.9em`,
})