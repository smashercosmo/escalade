import React from 'react'
import { PostalCodeElement } from 'react-stripe-elements'
import Input from './input'
import inputStyles from './input-styles'

export default class StripeZipCode extends React.Component {
	render() {
		return (
			<Input
				label='Zip Code'
			>
				{({
					handleChange,
					handleFocus,
					handleBlur,
				}) => (
					<PostalCodeElement
						placeholder=''
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						style={inputStyles}
					/>
				)}
			</Input>
		)
	}
}