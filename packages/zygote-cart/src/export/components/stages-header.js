import React from 'react'
import changeStage from '../utils/change-stage'
import submitInfo from '../utils/attempt-submit-info'

export default class StagesHeader extends React.Component {
	render() {
		const { stage } = this.props
		return (
			<ul className='zygoteStepsHeader'>
				<li
					role='button'
					className={`zygoteStepLink${stage === `info` ? ` zygoteActiveStepLink` : ``}`}
					onClick={stage === `info` ? null : () => changeStage(`info`)}
				>
					1. Your Details
				</li>
				<li
					role='button'
					className={`zygoteStepLink${stage === `payment` ? ` zygoteActiveStepLink` : ``}`}
					onClick={stage === `payment` ? null : submitInfo}
				>
					2. Payment
				</li>
			</ul>
		)
	}
}