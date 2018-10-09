import React from 'react'
import { Number } from 'react-credit-card-primitives'
import Card from 'creditcards/card'
import types from 'creditcards-types'
import Input from './input'

console.log(types)

const card = Card(types)

export default class CreditCard extends React.Component {
	static defaultProps = {
		autoComplete: `cc-number`,
		label: `Card Number`,
		required: true,
		name: `billingCardNumber`,
	}
	validate(val){
		val = val.replace(/\D/g, ``)
		if (!card.isValid(val)){
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
				onChange={({ type }) => {
					console.log(type)
				}}
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