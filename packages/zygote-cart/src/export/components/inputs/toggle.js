import React from 'react'
import { css } from 'emotion'
import SmallButton from '../small-button'

export default class Toggle extends React.Component {
	render() {
		return (
			<div className={buttonStyles} onClick={this.props.onClick}>
				<SmallButton>+</SmallButton> <span className={msgStyles}>{this.props.children}</span>
			</div>
		)
	}
}

const msgStyles = css({
	position: `relative`,
	marginLeft: 7,
	top: -4,
})

const buttonStyles = css({
	marginTop: 35,
	cursor: `pointer`,
})