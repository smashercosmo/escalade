import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css } from 'emotion'
import messagesState from '../state/status-messages'

export default class ErrorMessages extends React.Component {
	render() {
		return (
			<Subscribe to={messagesState}>
				{({ errors }) => (
					<Fragment>
						{errors && (
							<ul className={errorsStyle}>
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

const errorsStyle = css({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	'> li': {
		margin: `10px 0`,
		padding: `7px 10px`,
		background: `rgba(255, 0, 0, .1)`,
		border: `1px solid rgba(255, 0, 0, .3)`,
	},
})