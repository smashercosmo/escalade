import React from 'react'

export default class SmallButton extends React.Component {
	render() {
		const {
			onClick,
			children,
			secondary,
		} = this.props
		return (
			<div
				className={`zygoteSmBtn ${!secondary ? `zygotePrimarySmBtn` : `zygoteSecondarySmBtn`}`}
				role='button'
				onClick={onClick}
			>
				<span>{children}</span>
			</div>
		)
	}
}