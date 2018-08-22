import React from 'react'
import isEmail from 'is-email'
import Input from './input'

export default class EmailInput extends React.Component {
	static defaultProps = {
		label: `Email`,
		required: true,
	}
	validate(val){
		if(!isEmail(val)){
			return `Please supply a valid email address`
		}
	}
	render() {
		const {
			label,
			required,
		} = this.props
		return (
			<Input
				type='email'
				autoComplete='email'
				label={label}
				required={required}
				validators={[this.validate]}
			/>
		)
	}
}