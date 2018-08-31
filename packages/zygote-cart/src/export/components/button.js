import React from 'react'
import {
	fontColor,
	primaryColor,
	backgroundColor,
	borderColor,
} from '../styles/settings'

export default class Button extends React.Component {
	render() {
		const {
			onClick,
			children,
			secondary,
			disabled,
		} = this.props
		return (
			<button
				className={`zygoteBtn ${!secondary ? `zygotePrimaryBtn` : `zygoteSecondaryBtn`}`}
				onClick={onClick}
				disabled={disabled}
				type='button'
			>
				{children}
			</button>
		)
	}
	static styles = {
		'.zygoteBtn': {
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
			':disabled': {
				backgroundColor: `#ccc`,
				cursor: `default`,
				color: `#fff`,
				':hover': {
					opacity: 1,
				},
			},
		},
		'.zygotePrimaryBtn': {
			backgroundColor: primaryColor,
			color: backgroundColor,
		},
		'.zygoteSecondaryBtn': {
			border: `1px solid ${borderColor}`,
			color: fontColor,
		},
	}
}