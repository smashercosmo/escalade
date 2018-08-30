import React from 'react'
import states from 'datasets-us-states-names'
import Select from './select'

export default class NameInput extends React.Component {
	static defaultProps = {
		label: `State`,
		autoComplete: `region`,
		required: true,
		name: `state`,
	}
	render() {
		const {
			label,
			autoComplete,
			required,
			name,
			stage,
		} = this.props
		return (
			<Select
				label={label}
				required={required}
				autoComplete={autoComplete}
				name={name}
				stage={stage}
			>
				{states.map((state, index) => (
					<option
						key={`state${index}`}
						value={state}
					>
						{state}
					</option>
				))}
			</Select>
		)
	}
}