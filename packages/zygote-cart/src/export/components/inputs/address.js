import React from 'react'
import Input from './input'

export default class NameInput extends React.Component {
	render() {
		return (
			<Input
				label='Address'
				autoComplete='shipping address-line1'
				required
			/>
		)
	}
}