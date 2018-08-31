import React from 'react'
import { CardExpiryElement } from 'react-stripe-elements'
import Input from './input'

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
						classes={{ base: `zygoteStripeInput` }}
					/>
				)}
			</Input>
		)
	}
}