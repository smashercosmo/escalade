import React from 'react'
import { css, cx } from 'emotion'
import {
	primaryColor,
	borderColor,
	backgroundColor,
} from '../styles'

export default class SmallButton extends React.Component {
	render() {
		const {
			onClick,
			children,
			secondary,
		} = this.props
		return (
			<div
				className={cx(buttonStyles, secondary ? secondaryButtonStyles : primaryButtonStyles)}
				role='button'
				onClick={onClick}
			>
				<span>{children}</span>
			</div>
		)
	}
}

const buttonStyles = css({
	display: `inline-block`,
	position: `relative`,
	width: 19,
	height: 19,
	borderRadius: `100%`,
	textAlign: `center`,
	fontWeight: `bold`,
	fontSize: 22,
	span: {
		position: `absolute`,
		marginTop: -1,
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
	},
})

const primaryButtonStyles = css({
	backgroundColor: primaryColor,
	color: backgroundColor,
})

const secondaryButtonStyles = css({
	backgroundColor: borderColor,
	color: backgroundColor,
})