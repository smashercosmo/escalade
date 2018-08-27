import React from 'react'
import { css } from 'emotion'
import { ThreeBounce } from 'better-react-spinkit'
import { primaryColor } from '../styles'

export default class LoadingAnimation extends React.Component {
	static defaultProps = {
		size: 10,
	}
	render() {
		return (
			<div className={loadingAnimation}>
				<ThreeBounce color={primaryColor} size={this.props.size} />
			</div>
		)
	}
}

const loadingAnimation = css({
	textAlign: `center`,
})