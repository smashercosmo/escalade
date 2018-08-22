import React from 'react'
import isZip from 'is-valid-zip'
import Input from './input'

export default class EmailInput extends React.Component {
	static defaultProps = {
		label: `Zip Code`,
		required: true,
		autoComplete: `postal-code`,
	}
	validate(val){
		if (!isZip(val)){
			return `Please supply a valid zip code`
		}
	}
	render() {
		const {
			label,
			required,
			autoComplete,
		} = this.props
		return (
			<Input
				autoComplete={autoComplete}
				label={label}
				required={required}
				validators={[this.validate]}
			/>
		)
	}
}