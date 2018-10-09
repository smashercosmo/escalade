import React from 'react'
import { Number } from 'react-credit-card-primitives'
import Input from './input'

export default class CreditCard extends React.Component {
	static defaultProps = {
		autoComplete: `cc-number`,
		label: `Card Number`,
		required: true,
		name: `billingCardNumber`,
	}
	validate(valid){
		if(!valid){
			return `Please supply a valid credit card number`
		}
	}
	render() {
		const {
			autoComplete,
			required,
			label,
			name,
			step,
		} = this.props
		return (
			<Number
				onChange={({ valid }) => this.validate(valid)}
				render={({ getInputProps }) => {
					const props = getInputProps()
					delete props.placeholder
					return (
						<Input
							type='text'
							autoComplete={autoComplete}
							label={label}
							required={required}
							validators={[this.validate]}
							name={name}
							step={step}
							{...props}
						/>
					)
				}}
			/>
		)
	}
}