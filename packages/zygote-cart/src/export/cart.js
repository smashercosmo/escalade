import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css, cx } from 'emotion'
import {
	overlayColor,
	backgroundColor,
	fontFamily,
} from './styles'
import openState, { closeCart } from './state/open'

export default class Cart extends React.Component {
	static defaultProps = {
		cartMessage: `Your Cart:`,
	}
	render() {
		const {
			logo,
			cartMessage,
		} = this.props
		return (
			<Subscribe to={openState}>
				{({ open }) => (
					<Fragment>
						<div
							className={cx(bgStyles, open ? bgOpenStyles : null)}
							onClick={closeCart}
						/>
						<div
							className={cx(cartStyles, open ? cartOpenStyles : null)}
						>
							{logo && (
								<div>{logo}</div>
							)}
							{cartMessage && (
								<div>{cartMessage}</div>
							)}
						</div>
					</Fragment>
				)}
			</Subscribe>
		)
	}
}

const bgStyles = css({
	position: `fixed`,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	background: overlayColor,
	visibility: `hidden`,
	opacity: 0,
	transition: `opacity .3s, visibility .3s`,
	fontFamily,
})
const bgOpenStyles = css({
	visibility: `visible`,
	opacity: 1,
})

const cartStyles = css({
	position: `fixed`,
	top: 0,
	bottom: 0,
	right: 0,
	width: 500,
	maxWidth: `100%`,
	backgroundColor,
	transform: `translateX(100%)`,
	transition: `transform .3s`,
	boxShadow: `-5px 0 10px rgba(0, 0, 0, 0.2)`,
})
const cartOpenStyles = css({
	transform: `translateX(0%)`,
})