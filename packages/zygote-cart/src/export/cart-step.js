import React from 'react'
import { css } from 'emotion'

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
			</div>
		)
	}
}


const cartMessageStyles = css({
	textAlign: `center`,
	fontStyle: `italic`,
})