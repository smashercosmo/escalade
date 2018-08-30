import React from 'react'

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
}