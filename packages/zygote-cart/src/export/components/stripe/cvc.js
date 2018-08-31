import React from 'react'
import { CardCVCElement } from 'react-stripe-elements'
import Input from './input'

export default class StripeCardNumber extends React.Component {
	render() {
		return (
			<Input
				label='CVC'
			>
				{({
					handleChange,
					handleFocus,
					handleBlur,
				}) => (
					<CardCVCElement
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