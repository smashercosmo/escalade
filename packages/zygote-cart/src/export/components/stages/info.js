import React from 'react'
import { css } from 'emotion'
import NameInput from '../inputs/name'
import EmailInput from '../inputs/email'
import PhoneInput from '../inputs/phone'
import AddressInput from '../inputs/address'
import Address2Input from '../inputs/address-2'
import CompanyName from '../inputs/company-name'
import StagesHeader from '../stages-header'
import Header from '../header'

export default class InfoStage extends React.Component{
	render() {
		return (
			<form autoComplete='on'>
				<StagesHeader stage='info' />
				<div className={sectionStyles}>
					<Header>Let's get started</Header>
					<NameInput />
					<EmailInput />
					<PhoneInput />
				</div>
				<div className={sectionStyles}>
					<Header>Where should we deliver?</Header>
					<AddressInput />
					<div className={extraStyles}>
						<div>
							<Address2Input />
						</div>
						<div>
							<CompanyName />
						</div>
					</div>
				</div>
			</form>
		)
	}
}

const sectionStyles = css({
	marginTop: 40,
})

const extraStyles = css({
	display: `flex`,
	'> div': {
		width: `50%`,
		padding: `0 10px`,
		':first-of-type': {
			paddingLeft: 0,
		},
		':last-of-type': {
			paddingRight: 0,
		},
	},
})