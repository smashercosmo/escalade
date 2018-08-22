import React from 'react'
import { css } from 'emotion'
import NameInput from '../inputs/name'
import EmailInput from '../inputs/email'
import PhoneInput from '../inputs/phone'
import StagesHeader from '../stages-header'
import Header from '../header'

export default class InfoStage extends React.Component{
	render() {
		return (
			<form autoComplete='on'>
				<StagesHeader stage='info' />
				<div className={sectionStyles}>
					<Header>{`Let's get started`}</Header>
					<NameInput />
					<EmailInput />
					<PhoneInput />
				</div>
			</form>
		)
	}
}

const sectionStyles = css({
	marginTop: 40,
})