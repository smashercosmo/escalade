import React from 'react'
import { Subscribe } from 'statable'
import { css, cx } from 'emotion'
import {
	overlayColor,
	backgroundColor,
	fontFamily,
	fontColor,
} from '../styles'
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
			addedToCartMsg,
		} = this.props
		return (
			<Subscribe to={[openState, stageState, addedToCartState]}>
				{({ open }, { stage, processing }, { addedToCart }) => (
					<div className={cx(containerStyles, `zygoteCart`)}>
						<div
							className={cx(bgStyles, open ? bgOpenStyles : null)}
							onClick={closeCart}
						/>
						<div
							className={cx(cartStyles, open ? cartOpenStyles : null)}
						>
							<div
								role='button'
								className={closeStyles}
								onClick={closeCart}
							>×</div>

							{header && (
								<div className={headerStyles}>{header}</div>
							)}

							<Errors />
							<Info />

							<div className={cx(
								stageStyles,
								stage === `cart` && !processing && activeStageStyles,
							)}>
								<CartStage
									cartHeader={cartHeader}
									cartFooter={cartFooter}
									addedToCart={addedToCart
										? addedToCartMsg || <AddedToCartMessage />
										: false
									}
								/>
							</div>
							<div className={cx(
								stageStyles,
								stage === `info` && !processing && activeStageStyles,
							)}>
								<InfoStage />
							</div>
							<div className={cx(
								stageStyles,
								stage === `payment` && !processing && activeStageStyles,
							)}>
								<PaymentStage />
							</div>
							<div className={cx(
								stageStyles,
								stage === `success` && !processing && activeStageStyles,
							)}>
								<SuccessStage />
							</div>
							{!!processing && (
								<Processing>{processing}</Processing>
							)}
						</div>
					</div>
				)}
			</Subscribe>
		)
	}
}

const stageStyles = css({
	display: `none`,
})
const activeStageStyles = css({
	display: `block`,
})

const headerStyles = css({
	textAlign: `center`,
	marginBottom: 20,
})

const closeStyles = css({
	position: `absolute`,
	top: 25,
	right: 25,
	fontSize: `3em`,
	lineHeight: `22px`,
	cursor: `pointer`,
	fontWeight: 200,
})

const containerStyles = css({
	color: fontColor,
	fontFamily,
	textRendering: `optimizeLegibility`,
	'-webkit-font-smoothing': `antialiased`,
	fontSize: 16,
	'[role="button"]': {
		cursor: `pointer`,
		userSelect: `none`,
	},
	'&, *, *:before, *:after': {
		boxSizing: `border-box`,
	},
})

const bgStyles = css({
	position: `fixed`,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	background: overlayColor,
	visibility: `hidden`,
	opacity: 0,
	transition: `opacity .3s, visibility .3s`,
})
const bgOpenStyles = css({
	visibility: `visible`,
	opacity: 1,
})

const cartStyles = css({
	position: `fixed`,
	top: 0,
	bottom: 0,
	right: 0,
	width: 500,
	overflowY: `auto`,
	maxWidth: `100%`,
	backgroundColor,
	transform: `translateX(110%)`,
	transition: `transform .3s`,
	boxShadow: `-3px 0 4px rgba(0, 0, 0, 0.2)`,
	padding: 20,
	paddingTop: 40,
})
const cartOpenStyles = css({
	transform: `translateX(0%)`,
})
