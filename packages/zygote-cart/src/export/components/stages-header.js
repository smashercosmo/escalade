import React from 'react'
import { css, cx } from 'emotion'
import changeStage from '../utils/change-stage'
import { primaryColor } from '../styles'

export default class StagesHeader extends React.Component {
	render() {
		const { stage } = this.props
		return (
			<ul className={ulStyles}>
				<li
					role='button'
					className={cx(
						listStyles,
						stage === `info` ? activeStyles : null
					)}
					onClick={() => changeStage(`info`)}
				>
					1. Your Details
				</li>
				<li
					role='button'
					className={cx(
						listStyles,
						stage === `payment` ? activeStyles : null
					)}
					onClick={() => changeStage(`payment`)}
				>
					2. Payment
				</li>
			</ul>
		)
	}
}

const borderWidth = 3

const ulStyles = css({
	listStyleType: `none`,
	padding: 0,
	margin: 0,
	fontWeight: `bold`,
	textAlign: `center`,
	color: `#C0BFBF`,
})

const listStyles = css({
	display: `inline-block`,
	padding: 10,
	width: 140,
	borderBottom: `${borderWidth}px solid #C0BFBF`,
})

const activeStyles = css({
	color: primaryColor,
	borderBottom: `${borderWidth}px solid ${primaryColor}`,
})