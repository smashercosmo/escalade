import React from 'react'
import { css, cx } from 'emotion'
import Visa from '../card-list/visa'
import Mastercard from '../card-list/mastercard'
import AmericanExpress from '../card-list/american-express'
import Discover from '../card-list/discover'
import registerInput from '../../utils/register-input'
import unregisterInput from '../../utils/unregister-input'

export default class StripeInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			focus: false,
			value: false,
		}
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.validate = this.validate.bind(this)
	}
	handleFocus() {
		this.setState({ focus: true })
	}
	handleBlur() {
		this.setState({ focus: false })
	}
	handleError(msg){
		this.setState({ error: msg })
	}
	handleChange(e){
		this.setState({
			value: !e.empty,
			error: e.error && e.error.message ? e.error.message : false,
			brand: e.brand,
		})
	}
	validate(){
		const {
			value,
			error,
		} = this.state
		if(!value){
			this.setState({
				error: `This field is required`,
			})
			return false
		}
		if(!error) return false
		return true
	}
	componentDidMount() {
		registerInput(this)
	}
	componentWillUnmount() {
		unregisterInput(this)
	}
	render() {
		const {
			focus,
			error,
			value,
			brand,
		} = this.state
		const {
			label,
		} = this.props
		return (
			<label className={cx(
				containerStyles,
				focus ? focusStyles : null,
				error ? errorStyles : null,
			)}>
				<span
					className={cx(
						labelStyles,
						(value || focus) ? movedLabelStyles : null,
					)}
				>
					{label}
				</span>
				<span className={inputStyles}>
					{this.props.children({
						handleFocus: this.handleFocus,
						handleBlur: this.handleBlur,
						handleError: this.handleError,
						handleChange: this.handleChange,
					})}
				</span>
				{!!brand && (
					<div className={cardStyles}>
						{brand === `visa` && <Visa />}
						{brand === `mastercard` && <Mastercard />}
						{brand === `amex` && <AmericanExpress />}
						{brand === `discover` && <Discover />}
					</div>
				)}
				{error && (
					<span className={errorMsgStyles} data-error>{error}</span>
				)}
			</label>
		)
	}
}

const cardStyles = css({
	position: `absolute`,
	width: 35,
	right: 7,
	top: 7,
})

const inputStyles = css({
	display: `block`,
	paddingLeft: 10,
})

const containerStyles = css({
	position: `relative`,
	display: `block`,
	marginTop: 30,
	fontSize: `.9em`,
	background: `#F8F8F8`,
	border: `1px solid #EFF0F0`,
	borderRadius: 4,
})

const errorStyles = css({
	color: `#f00`,
	border: `1px solid #f00`,
})

const focusStyles = css({
	border: `1px solid #666`,
})

const errorMsgStyles = css({
	position: `absolute`,
	display: `inline-block`,
	fontSize: `.75em`,
	right: 0,
	bottom: -18,
})

const labelStyles = css({
	position: `absolute`,
	top: -18,
	left: 0,
	fontSize: `.85em`,
	display: `block`,
	opacity: .75,
	transition: `transform .2s`,
	transform: `translate(7px, 30px)`,
})

const movedLabelStyles = css({
	transform: `translate(0px, 0px)`,
})