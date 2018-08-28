import React from 'react'
import { css } from 'emotion'
import { ThreeBounce } from 'better-react-spinkit'
import { primaryColor } from '../styles'

export default class Processing extends React.Component {
	render() {
		return (
			<div className={containerStyles}>
				<div className={animationStyles}>
					<ThreeBounce size={22} color={primaryColor} />
				</div>
				{this.props.message || (
					<div>Processing your order.<br />Please do not close this page.</div>
				)}
			</div>
		)
	}
}

const containerStyles = css({
	textAlign: `center`,
})

const animationStyles = css({
	margin: `100px auto 30px auto`,
})