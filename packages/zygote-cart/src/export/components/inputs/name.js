import React from 'react'
import Input from './input'

export default class NameInput extends React.Component {
	static defaultProps = {
		label: `Full Name`,
		autoComplete: `name`,
		required: true,
		name: `name`,
	}
	render() {
		const {
			label,
			autoComplete,
			required,
			name,
		} = this.props
		return (
			<Input
				label={label}
				autoComplete={autoComplete}
				required={required}
				name={name}
			/>
		)
	}
}