import React, { Fragment } from 'react'
import Input from './input'
import Toggle from './toggle'

export default class Address2Input extends React.Component {
	constructor(props){
		super(props)
		this.state = { open: false }
		this.open = this.open.bind(this)
	}
	open(){
		this.setState({ open: true })
		setTimeout(() => {
			this.input.focus()
		}, 1)
	}
	render() {
		const { open } = this.state
		return (
			<Fragment>
				<div style={{ display: open ? `none` : `block` }}>
					<Toggle onClick={this.open}>Add an Apt/Suite #</Toggle>
				</div>
				<div style={{ display: open ? `block` : `none` }}>
					<Input
						inputRef={el => this.input = el}
						label='Apt/Suite #'
						autoComplete='shipping address-line2'
					/>
				</div>
			</Fragment>
		)
	}
}