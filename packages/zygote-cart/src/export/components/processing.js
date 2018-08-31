import React from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import { primaryColor } from '../styles/settings'

export default class Processing extends React.Component {
	render() {
		return (
			<div className='zygoteProcessing'>
				<div>
					<ThreeBounce size={22} color={primaryColor} />
				</div>
				{this.props.message || (
					<div>Processing your order.<br />Please do not close this page.</div>
				)}
			</div>
		)
	}
	static styles = {
		'.zygoteProcessing': {
			textAlign: `center`,
			'> div:first-of-type': {
				margin: `100px auto 30px auto`,
			},
		},
	}
}