import React from 'react'
import { css, cx } from 'emotion'

export default class Checkbox extends React.Component {
	render() {
		const {
			name,
			value,
			checked,
			onChange,
		} = this.props
		return (
			<div className={cx(
				checkboxStyles,
				checked ? checkedStyles : null
			)}>
				<input
					type='checkbox'
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
				/>
				{checked && (
					<div className={checkStyles}>✓</div>
				)}
			</div>
		)
	}
}

const size = 20

const checkboxStyles = css({
	width: size,
	height: size,
	border: `1px solid #666`,
	position: `relative`,
	display: `inline-block`,
	input: {
		display: `none`,
	},
})

const checkedStyles = css({
	background: `#666`,
})

const checkStyles = css({
	color: `#fff`,
	position: `absolute`,
	left: `50%`,
	top: `50%`,
	transform: `translate(-50%, -50%)`,
})