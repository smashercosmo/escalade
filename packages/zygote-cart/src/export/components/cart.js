import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import openState from '../state/open'
import closeCart from '../utils/close-cart'
import stageState from '../state/stage'
import addedToCartState from '../state/added-to-cart'
import settingsState from '../state/settings'
import CartStage from './stages/cart'
import InfoStage from './stages/info'
import PaymentStage from './stages/payment'
import SuccessStage from './stages/success'
import addTotalModification from '../utils/add-total-modification'
import calculateTotals from '../utils/calculate-totals'
import AddedToCartMessage from './added-to-cart-message'
import Processing from './processing'
import Errors from './errors'
import Info from './info'
import containerStyles from '../styles'
import capitalize from '../utils/capitalize'

export default class Cart extends React.Component {
	constructor(props){
		super(props)
		settingsState.setState(props)
	}
	componentDidMount(){
		const { totalModifications } = this.props
		if (totalModifications){
			addTotalModification(totalModifications)
		}
		calculateTotals()
	}
	render() {
		const {
			header,
			cartHeader,
			cartFooter,
			infoHeader,
			infoFooter,
			paymentHeader,
			paymentFooter,
			successHeader,
			successFooter,
			addedToCartMsg,
		} = this.props
		return (
			<Subscribe to={[openState, stageState, addedToCartState]}>
				{({ open, init }, { stage, processing }, { addedToCart }) => (
					<Fragment>
						{init && (
							<div className={containerStyles}>
								<div className={`zygote zygoteOn${processing ? `Processing` : `${capitalize(stage)}Step`}${open ? ` zygoteOpen` : ``}`}>
									<div className='zygoteBg' onClick={closeCart} />
									<div className='zygoteCart'>
										<div
											role='button'
											className='zygoteCloseButton'
											onClick={closeCart}
										>×</div>

										{header && (
											<div className='zygoteHeader'>{header}</div>
										)}

										<Errors />
										<Info />

										<div className='zygoteStep zygoteCartStep'>
											<CartStage
												cartHeader={cartHeader}
												cartFooter={cartFooter}
												addedToCart={addedToCart
													? addedToCartMsg || <AddedToCartMessage />
													: false
												}
											/>
										</div>
										<div className='zygoteStep zygoteInfoStep'>
											<InfoStage
												infoHeader={infoHeader}
												infoFooter={infoFooter}
											/>
										</div>
										<div className='zygoteStep zygotePaymentStep'>
											<PaymentStage
												paymentHeader={paymentHeader}
												paymentFooter={paymentFooter}
											/>
										</div>
										<div className='zygoteStep zygoteSuccessStep'>
											<SuccessStage
												successHeader={successHeader}
												successFooter={successFooter}
											/>
										</div>
										{!!processing && (
											<Processing>{processing}</Processing>
										)}
									</div>
								</div>
							</div>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
}