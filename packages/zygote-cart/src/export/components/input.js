import React from 'react'
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
		this.setState({
			value: e.target.value,
		})
	}
	handleFocus() {
		this.setState({ focus: true })
	}
	handleBlur(){
		this.setState({ focus: false })
	}
	render(){
		const { value, focus } = this.state
		return (
			<label className={container}>
				<span
					className={cx(
						label,
						(value || focus) ? movedLabel : null
					)}
				>
					{this.props.label}
				</span>
				<input
					type={this.props.type || `text`}
					className={input}
					value={value}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
				/>
			</label>
		)
	}
}

const container = css({
	position: `relative`,
	display: `inline-block`,
})

const input = css({
	background: `#F8F8F8`,
	border: `1px solid #EFF0F0`,
	borderRadius: 7,
	padding: 10,
	':focus': {
		outline: `none`,
		border: `1px solid #666`,
	},
})

const label = css({
	fontSize: `.8em`,
	display: `block`,
	opacity: .75,
	transition: `transform .2s`,
	transform: `translate(7px, 30px)`,
	marginBottom: 5,
	cursor: `text`,
})

const movedLabel = css({
	transform: `translate(0px, 0px)`,
	cursor: `default`,
})