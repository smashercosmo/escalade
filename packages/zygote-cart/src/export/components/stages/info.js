import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import stageState from '../../state/stage'
import NameInput from '../inputs/name'
import EmailInput from '../inputs/email'
import PhoneInput from '../inputs/phone'
import AddressInput from '../inputs/address'
import Address2Input from '../inputs/address-2'
import CompanyName from '../inputs/company-name'
import City from '../inputs/city'
import State from '../inputs/state'
import Zip from '../inputs/zip'
import StagesHeader from '../stages-header'
import Header from '../header'
import Button from '../button'
import submitInfo from '../../utils/attempt-submit-info'

export default class InfoStage extends React.Component{
	render() {
		const {
			infoHeader,
			infoFooter,
		} = this.props
		return (
			<Subscribe to={stageState}>
				{({ stage }) => (
					<Fragment>
						{(stage === `info` || stage === `payment`) && (
							<form data-form='info'>
								{!!infoHeader && (
									<div>{infoHeader}</div>
								)}
								<StagesHeader stage='info' />
								<div className={sectionStyles}>
									<Header>Let's get started</Header>
									<NameInput
										name='infoName'
										stage='info'
									/>
									<EmailInput
										name='infoEmail'
										stage='info'
									/>
									<PhoneInput
										name='infoPhone'
										stage='info'
									/>
								</div>
								<div className={sectionStyles}>
									<Header>Where should we deliver?</Header>
									<AddressInput
										name='shippingAddress1'
										autoComplete='shipping address-line1'
										stage='info'
									/>
									<div className={extraStyles}>
										<div>
											<Address2Input
												name='shippingAddress2'
												autoComplete='shipping address-line2'
												stage='info'
											/>
										</div>
										<div>
											<CompanyName
												name='shippingCompany'
												autoComplete='shipping org'
												stage='info'
											/>
										</div>
									</div>
									<div className={cityStateStyles}>
										<div>
											<City
												name='shippingCity'
												autoComplete='shipping locality'
												stage='info'
											/>
										</div>
										<div>
											<State
												name='shippingState'
												autoComplete='shipping region'
												stage='info'
											/>
										</div>
									</div>
									<Zip
										name='shippingZip'
										autoComplete='shipping postal-code'
										stage='info'
									/>
									<div className={buttonContainerStyles}>
										<Button onClick={submitInfo}>
											Next Step
										</Button>
									</div>
								</div>
								{!!infoFooter && (
									<div>{infoFooter}</div>
								)}
							</form>
						)}
					</Fragment>
				)}
			</Subscribe>
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

const buttonContainerStyles = css({
	marginTop: 30,
})