import React from 'react'
import { css } from 'emotion'

export default class SuccessStage extends React.Component{
	render() {
		return (
			<div>
				<h1 className={headerStyles}>Your order is in!</h1>
				<div>You will soon receive an email confirmation with your order details.</div>
			</div>
		)
	}
}

const headerStyles = css({
	textAlign: `center`,
})