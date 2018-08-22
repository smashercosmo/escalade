import React from 'react'
import Input from './input'

export default class NameInput extends React.Component {
	render() {
		return (
			<Input
				label='Full Name'
				autoComplete='name'
				required
			/>
		)
	}
}