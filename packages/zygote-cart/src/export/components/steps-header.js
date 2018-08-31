import React from 'react'
import changeStep from '../utils/change-step'
import submitInfo from '../utils/attempt-submit-info'

export default class StepsHeader extends React.Component {
	render() {
		const { step } = this.props
		return (
			<ul className='zygoteStepsHeader'>
				<li
					role='button'
					className={`zygoteStepLink${step === `info` ? ` zygoteActiveStepLink` : ``}`}
					onClick={step === `info` ? null : () => changeStep(`info`)}
				>
					1. Your Details
				</li>
				<li
					role='button'
					className={`zygoteStepLink${step === `payment` ? ` zygoteActiveStepLink` : ``}`}
					onClick={step === `payment` ? null : submitInfo}
				>
					2. Payment
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
			width: 140,
			borderBottom: `3px solid #C0BFBF`,
		},
		'.zygoteActiveStepLink': {
			color: primaryColor,
			borderBottom: `3px solid ${primaryColor}`,
			cursor: `default !important`,
		},
	})
}