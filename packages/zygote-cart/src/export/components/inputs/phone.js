import React from 'react'
import isPhone from 'is-phone'
import Input from './input'

export default class PhoneInput extends React.Component {
	static defaultProps = {
		label: `Phone`,
		required: true,
	}
	validate(val){
		if (!isPhone(val)){
			return `Please supply a valid phone number`
		}
	}
	render() {
		const {
			required,
			label,
		} = this.props
		return (
			<Input
				type='tel'
				autoComplete='tel'
				label={label}
				required={required}
				mask='(999) 999-9999'
				validators={[this.validate]}
			/>
		)
	}
}