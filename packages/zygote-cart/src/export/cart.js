import React from 'react'
import { Subscribe } from 'statable'
import { css, cx } from 'emotion'
import {
	overlayColor,
	backgroundColor,
	fontFamily,
	fontColor,
} from './styles'
import openState, { closeCart } from './state/open'
import CartStep from './cart-step'

export default class Cart extends React.Component {
	static defaultProps = {
		cartMessage: `You've added to your cart!`,
	}
	render() {
		const {
			logo,
			cartMessage,
		} = this.props
		return (
			<Subscribe to={openState}>
				{({ open }) => (
					<div className={containerStyles}>
						<div
							className={cx(bgStyles, open ? bgOpenStyles : null)}
							onClick={closeCart}
						/>
						<div
							className={cx(cartStyles, open ? cartOpenStyles : null)}
						>
							<div
								role='button'
								className={closeStyles}
								onClick={closeCart}
							>×</div>

							{logo && (
								<div className={logoStyles}>{logo}</div>
							)}

							<CartStep cartMessage={cartMessage} />
						</div>
					</div>
				)}
			</Subscribe>
		)
	}
}

const logoStyles = css({
	textAlign: `center`,
	marginBottom: 20,
})

const closeStyles = css({
	position: `absolute`,
	top: 25,
	right: 25,
	fontSize: `3em`,
	lineHeight: `22px`,
	cursor: `pointer`,
	fontWeight: 200,
})

const containerStyles = css({
	color: fontColor,
	fontFamily,
	textRendering: `optimizeLegibility`,
	'-webkit-font-smoothing': `antialiased`,
	'&, *, *:before, *:after': {
		boxSizing: `border-box`,
	},
})

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
	transform: `translateX(110%)`,
	transition: `transform .3s`,
	boxShadow: `-3px 0 4px rgba(0, 0, 0, 0.2)`,
	padding: 25,
	paddingTop: 40,
})
const cartOpenStyles = css({
	transform: `translateX(0%)`,
})
