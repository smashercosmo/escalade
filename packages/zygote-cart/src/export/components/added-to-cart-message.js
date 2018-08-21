import React from 'react'
import { css } from 'emotion'

export default class AddedToCartMessage extends React.Component {
	render() {
		return (
			<div className={msgStyles}>
				{`You've added a product to your cart!`}
			</div>
		)
	}
}

const msgStyles = css({
	fontSize: `1.3em`,
	textAlign: `center`,
	fontStyle: `italic`,
})