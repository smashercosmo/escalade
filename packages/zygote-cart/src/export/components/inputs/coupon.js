import React, { Fragment } from 'react'
import { css } from 'emotion'
import Input from './input'
import Toggle from './toggle'
import {
	borderColor,
	fontColor,
} from '../../styles'

export default class CompanyNameInput extends React.Component {
	static defaultProps = {
		toggleText: `Apply a Coupon`,
		label: `Coupon Code`,
	}
	constructor(props) {
		super(props)
		this.state = { open: false }
		this.open = this.open.bind(this)
	}
	open() {
		this.setState({ open: true })
		setTimeout(() => {
			this.input.focus()
		}, 1)
	}
	render() {
		const { open } = this.state
		const {
			toggleText,
			label,
			stage,
		} = this.props
		return (
			<Fragment>
				<div style={{ display: open ? `none` : `block` }}>
					<Toggle onClick={this.open}>
						{toggleText}
					</Toggle>
				</div>
				<div
					style={{ display: open ? `block` : `none` }}
					className={gridStyles}
				>
					<div>
						<Input
							inputRef={el => this.input = el}
							label={label}
							stage={stage}
						/>
					</div>
					<div role='button' className={applyStyles}>Apply</div>
				</div>
			</Fragment>
		)
	}
}

const gridStyles = css({
	display: `flex`,
	'> div': {
		display: `inline-block`,
	},
})

const applyStyles = css({
	position: `relative`,
	top: 2,
	display: `inline-block`,
	borderRadius: 20,
	textAlign: `center`,
	padding: `8px 30px`,
	maxWidth: `100%`,
	marginLeft: 10,
	border: `1px solid ${borderColor}`,
	color: fontColor,
})
