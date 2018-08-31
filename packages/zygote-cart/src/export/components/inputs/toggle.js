import React from 'react'
import SmallButton from '../small-button'

export default class Toggle extends React.Component {
	render() {
		return (
			<div className='zygoteToggle' onClick={this.props.onClick}>
				<SmallButton>+</SmallButton> <span className='zygoteToggleMsg'>{this.props.children}</span>
			</div>
		)
	}
	static styles = {
		'.zygoteToggle': {
			marginTop: 35,
			cursor: `pointer`,
		},
		'.zygoteToggleMsg': {
			position: `relative`,
			marginLeft: 5,
			top: -4,
			fontSize: `.85em`,
		},
	}
}