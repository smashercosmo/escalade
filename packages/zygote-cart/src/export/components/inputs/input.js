import React from 'react'
import InputMask from 'react-input-mask'
import registerInput from '../../utils/register-input'
import unregisterInput from '../../utils/unregister-input'

export default class Input extends React.Component{
	static defaultProps = {
		inputRef: () => {},
	}
	constructor(props){
		super(props)
		this.state = {
			value: ``,
			focus: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.validate = this.validate.bind(this)
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
	validate(){
		this.setState({ focus: false })
		const { value } = this.input

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
	componentDidMount(){
		//addValidator(this.validate)
		registerInput(this)
	}
	componentWillUnmount(){
		//removeValidator(this.validate)
		unregisterInput(this)
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
			name,
			inputRef,
		} = this.props
		return (
			<label className={`zygoteInputWrapper${focus ? ` zygoteInputFocus` : ``}${error ? ` zygoteInputErr` : ``}`}>
				<span className={`zygoteInputLabel${(value || focus) ? ` zygoteInputLabelMoved` : ``}`}>
					{label}
				</span>
				{mask && (
					<InputMask
						mask={mask}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						onBlur={this.validate}
						value={value}
					>
						{(inputProps) => (
							<input
								type={type || `text`}
								autoComplete={autoComplete}
								ref={input => {
									this.input = input
									inputRef(input)
								}}
								className='zygoteInput'
								name={name}
								{...inputProps}
							/>
						)}
					</InputMask>
				)}
				{!mask && (
					<input
						type={type || `text`}
						autoComplete={autoComplete}
						ref={input => {
							this.input = input
							inputRef(input)
						}}
						value={value}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						onBlur={this.validate}
						name={name}
						className='zygoteInput'
					/>
				)}
				{error && (
					<span className='zygoteInputErrMsg' data-error>{error}</span>
				)}
			</label>
		)
	}
	static styles = {
		'.zygoteInputWrapper': {
			position: `relative`,
			display: `block`,
			marginTop: 30,
			fontSize: `.9em`,
			background: `#F8F8F8`,
			border: `1px solid #EFF0F0`,
			borderRadius: 4,
		},
		'.zygoteInputFocus': {
			border: `1px solid #666`,
		},
		'.zygoteInputErr': {
			color: `#f00`,
			border: `1px solid #f00`,
		},
		'.zygoteInputLabel': {
			position: `absolute`,
			top: -18,
			left: 0,
			fontSize: `.85em`,
			display: `block`,
			opacity: .75,
			transition: `transform .2s`,
			transform: `translate(7px, 30px)`,
		},
		'.zygoteInputLabelMoved': {
			transform: `translate(0px, 0px)`,
		},
		'.zygoteInput': {
			width: `100%`,
			display: `block`,
			background: `transparent`,
			border: 0,
			borderRadius: 4,
			fontSize: `.9em`,
			padding: `0 10px`,
			height: 36,
			outline: `none`,
		},
		'.zygoteInputErrMsg': {
			position: `absolute`,
			display: `inline-block`,
			fontSize: `.75em`,
			right: 0,
			bottom: -18,
		},
	}
}