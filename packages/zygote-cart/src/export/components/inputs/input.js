import React from 'react'
import InputMask from 'react-input-mask'
import { css, cx } from 'emotion'

export default class Input extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: ``,
			focus: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
	}
	handleChange(e){
		if(this.props.handleChange){
			this.props.handleChange(e)
		}
		this.setState({ value: e.target.value })
	}
	handleFocus() {
		this.setState({ focus: true })
	}
	handleBlur(e){
		this.setState({ focus: false })
		const { value } = e.target

		// Required message
		if (this.props.required && !value){
			return this.setState({ error: `This field is required` })
		}

		// Run validation functions
		const { validators } = this.props
		if (validators) {
			for (let i = 0; i < validators.length; i++) {
				const error = validators[i](value)
				if (error) {
					return this.setState({ error })
				}
			}
		}

		this.setState({ error: false })
	}
	render(){
		const {
			value,
			focus,
			error,
		} = this.state
		const {
			label,
			mask,
			type,
			autoComplete,
		} = this.props
		return (
			<label className={cx(
				containerStyles,
				error ? errorStyles : null
			)}>
				<span
					className={cx(
						labelStyles,
						(value || focus) ? movedLabelStyles : null
					)}
				>
					{label}
				</span>
				{mask && (
					<InputMask
						mask={mask}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						value={value}
					>
						{(inputProps) => (
							<input
								type={type || `text`}
								autoComplete={autoComplete}
								ref={this.props.inputRef}
								{...inputProps}
							/>
						)}
					</InputMask>
				)}
				{!mask && (
					<input
						type={type || `text`}
						autoComplete={autoComplete}
						ref={this.props.inputRef}
						value={value}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
					/>
				)}
				{error && (
					<span className={errorMsgStyles}>{error}</span>
				)}
			</label>
		)
	}
}

const containerStyles = css({
	position: `relative`,
	display: `inline-block`,
	marginTop: 15,
})

const errorStyles = css({
	color: `#f00`,
	input: {
		border: `1px solid #f00`,
	},
})

const errorMsgStyles = css({
	position: `absolute`,
	display: `inline-block`,
	fontSize: `.75em`,
	right: 0,
	bottom: -18,
})

const labelStyles = css({
	fontSize: `.8em`,
	display: `block`,
	opacity: .75,
	transition: `transform .2s`,
	transform: `translate(7px, 32px)`,
	marginBottom: 5,
	cursor: `text`,
})

const movedLabelStyles = css({
	transform: `translate(0px, 0px)`,
	cursor: `default`,
})