import React from 'react'
import classNames from 'classnames'
import changeStep from '../utils/change-step'

export default class StepsHeader extends React.Component {
	render() {
		const { step } = this.props
		return (
			<ul className='zygoteStepsHeader'>
				<li
					role='button'
					className={classNames(
						`zygoteStepLink`,
						step === `info` && `zygoteActiveStepLink`,
						step !== `info` && `zygoteClickableStepLink`,
					)}
					onClick={step === `info` ? null : () => changeStep(`info`)}
				>
					Details
				</li>
				<li
					role='button'
					className={classNames(
						`zygoteStepLink`,
						step === `shipping` && `zygoteActiveStepLink`,
						step === `payment` && `zygoteClickableStepLink`,
					)}
					onClick={
						step === `payment`
							? () => changeStep(`shipping`)
							: null
					}
				>
					Shipping
				</li>
				<li
					className={classNames(
						`zygoteStepLink`,
						step === `payment` && `zygoteActiveStepLink`,
					)}
				>
					Payment
				</li>
			</ul>
		)
	}
	static styles = ({ primaryColor }) => ({
		'.zygoteStepsHeader': {
			listStyleType: `none`,
			padding: 0,
			margin: 0,
			fontWeight: `bold`,
			textAlign: `center`,
			color: `#C0BFBF`,
			fontSize: `.8em`,
		},
		'.zygoteStepLink': {
			display: `inline-block`,
			padding: 10,
			width: 90,
			borderBottom: `3px solid #C0BFBF`,
		},
		'.zygoteActiveStepLink, .zygoteClickableStepLink': {
			color: primaryColor,
			borderBottom: `3px solid ${primaryColor}`,
			cursor: `default !important`,
		},
		'.zygoteClickableStepLink': {
			cursor: `pointer !important`,
		},
	})
}