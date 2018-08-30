import React from 'react'
import { css, cx } from 'emotion'
import {
	backgroundColor,
	primaryColor,
	fontColor,
	borderColor,
} from '../styles'

export default class Button extends React.Component {
	render() {
		const {
			onClick,
			children,
			secondary,
		} = this.props
		return (
			<button
				className={cx(buttonStyles, secondary ? secondaryButtonStyles : primaryButtonStyles)}
				onClick={onClick}
			>
				{children}
			</button>
		)
	}
}

const buttonStyles = css({
	borderRadius: 20,
	textAlign: `center`,
	padding: 10,
	maxWidth: `100%`,
	width: 250,
	fontWeight: `bold`,
	margin: `10px auto`,
	display: `block`,
	fontSize: `1em`,
	outline: `none`,
	border: 0,
	cursor: `pointer`,
	':hover, :focus': {
		opacity: .75,
	},
})

const primaryButtonStyles = css({
	backgroundColor: primaryColor,
	color: backgroundColor,
})

const secondaryButtonStyles = css({
	border: `1px solid ${borderColor}`,
	color: fontColor,
})