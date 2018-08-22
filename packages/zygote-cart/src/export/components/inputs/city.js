import React from 'react'
import Input from './input'

export default class CityInput extends React.Component {
	static defaultProps = {
		label: `City`,
		autoComplete: `locality`,
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