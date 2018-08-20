import React from 'react'
import { css } from 'emotion'
import ProductList from './product-list'

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
				</div>
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
	paddingTop: 30,
	borderTop: `1px solid #333`,
})