import React from 'react'
import { CardExpiryElement } from 'react-stripe-elements'
import Input from './input'
import inputStyles from './input-styles'

export default class StripeExpiration extends React.Component {
	render() {
		return (
			<Input
				label='Expiration'
			>
				{({
					handleChange,
					handleFocus,
					handleBlur,
				}) => (
					<CardExpiryElement
						placeholder=''
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						classes={inputStyles}
					/>
				)}
			</Input>
		)
	}
}