import React from 'react'
import { css } from 'emotion'
import SmallButton from '../small-button'
import Input from './input'
import {
	borderColor,
	fontColor,
} from '../../styles'

export default class CouponInput extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			open: false,
		}
		this.open = this.open.bind(this)
	}
	open(){
		this.setState({ open: true })
	}
	render() {
		const { open } = this.state
		return (
			<div
				className={containerStyles}
				onClick={this.open}
			>
				{!open && (
					<div className={buttonStyles}>
						<SmallButton>+</SmallButton> <span className={applyMsg}>Apply a Coupon</span>
					</div>
				)}
				{open && (
					<div>
						<Input label='Coupon Code' />
						<div role='button' className={applyStyles}>Apply</div>
					</div>
				)}
			</div>
		)
	}
}

const containerStyles = css({
	marginTop: 5,
})

const applyMsg = css({
	position: `relative`,
	marginLeft: 7,
	top: -4,
})

const buttonStyles = css({
	marginTop: 35,
	cursor: `pointer`,
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
