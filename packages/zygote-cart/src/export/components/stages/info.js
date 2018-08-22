import React from 'react'
import { css } from 'emotion'
import NameInput from '../inputs/name'
import EmailInput from '../inputs/email'
import PhoneInput from '../inputs/phone'
import AddressInput from '../inputs/address'
import Address2Input from '../inputs/address-2'
import CompanyName from '../inputs/company-name'
import City from '../inputs/city'
import State from '../inputs/state'
import StagesHeader from '../stages-header'
import Header from '../header'

export default class InfoStage extends React.Component{
	render() {
		return (
			<form autoComplete='on'>
				<StagesHeader stage='info' />
				<div className={sectionStyles}>
					<Header>Let's get started</Header>
					<NameInput autoComplete='shipping name' />
					<EmailInput autoComplete='shipping email' />
					<PhoneInput autoComplete='shipping tel' />
				</div>
				<div className={sectionStyles}>
					<Header>Where should we deliver?</Header>
					<AddressInput autoComplete='shipping address-line1' />
					<div className={extraStyles}>
						<div>
							<Address2Input autoComplete='shipping address-line2' />
						</div>
						<div>
							<CompanyName autoComplete='shipping org' />
						</div>
					</div>
					<div className={cityStateStyles}>
						<div>
							<City autoComplete='shipping locality' />
						</div>
						<div>
							<State autoComplete='shipping region' />
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
	'@media(min-width: 450px)': {
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
	},
})

const cityStateStyles = css({
	'@media(min-width: 450px)': {
		display: `flex`,
		'> div': {
			padding: `0 10px`,
			':first-of-type': {
				width: `60%`,
				paddingLeft: 0,
			},
			':last-of-type': {
				width: `40%`,
				paddingRight: 0,
			},
		},
	},
})