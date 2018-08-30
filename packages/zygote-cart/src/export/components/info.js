import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import messagesState from '../state/status-messages'

export default class InfoMessages extends React.Component {
	render() {
		return (
			<Subscribe to={messagesState}>
				{({ info }) => (
					<Fragment>
						{info && (
							<ul className='zygoteInfo'>
								{info.map((info, index) => (
									<li key={`info${index}`}>{info}</li>
								))}
							</ul>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
}