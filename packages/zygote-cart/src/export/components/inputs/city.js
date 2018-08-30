import React from 'react'
import Input from './input'

export default class CityInput extends React.Component {
	static defaultProps = {
		label: `City`,
		autoComplete: `locality`,
		required: true,
		name: `city`,
	}
	render() {
		const {
			label,
			autoComplete,
			required,
			name,
			stage,
		} = this.props
		return (
			<Input
				label={label}
				autoComplete={autoComplete}
				required={required}
				name={name}
				stage={stage}
			/>
		)
	}
}