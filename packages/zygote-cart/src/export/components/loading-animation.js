import React from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import { primaryColor } from '../styles/settings'

export default class LoadingAnimation extends React.Component {
	static defaultProps = {
		size: 10,
	}
	render() {
		return (
			<div className='zygoteLoading'>
				<ThreeBounce color={primaryColor} size={this.props.size} />
			</div>
		)
	}
	static styles = () => ({
		'.zygoteLoading': {
			textAlign: `center`,
		},
	})
}