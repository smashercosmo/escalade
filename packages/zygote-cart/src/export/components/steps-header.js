import React from 'react'
import classNames from 'classnames'
import changeStep from '../utils/change-step'
import submitInfo from '../utils/attempt-submit-info'

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
					)}
					onClick={step === `info` ? null : () => changeStep(`info`)}
				>
					1. Details
				</li>
				<li
					role='button'
					className={classNames(
						`zygoteStepLink`,
						step === `shipping` && `zygoteActiveStepLink`,
					)}
					onClick={step === `shipping` ? null : () => changeStep(`shipping`)}
				>
					2. Shipping
				</li>
				<li
					role='button'
					className={classNames(
						`zygoteStepLink`,
						step === `payment` && `zygoteActiveStepLink`,
					)}
					onClick={step === `payment` ? null : submitInfo}
				>
					3. Payment
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
		},
		'.zygoteStepLink': {
			display: `inline-block`,
			padding: 10,
			width: 120,
			borderBottom: `3px solid #C0BFBF`,
		},
		'.zygoteActiveStepLink': {
			color: primaryColor,
			borderBottom: `3px solid ${primaryColor}`,
			cursor: `default !important`,
		},
	})
}