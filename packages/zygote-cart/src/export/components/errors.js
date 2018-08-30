import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import messagesState from '../state/status-messages'

export default class ErrorMessages extends React.Component {
	render() {
		return (
			<Subscribe to={messagesState}>
				{({ errors }) => (
					<Fragment>
						{errors && (
							<ul className='zygoteErrors'>
								{errors.map((error, index) => (
									<li key={`error${index}`}>{error}</li>
								))}
							</ul>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
}