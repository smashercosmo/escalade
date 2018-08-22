import React from 'react'
import Input from './input'

export default class NameInput extends React.Component {
	static defaultProps = {
		label: `Full Name`,
		autoComplete: `name`,
		required: true,
	}
	render() {
		const {
			label,
			autoComplete,
			required,
		} = this.props
		return (
			<Input
				label={label}
				autoComplete={autoComplete}
				required={required}
			/>
		)
	}
}