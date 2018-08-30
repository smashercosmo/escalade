import { css } from 'emotion'
import {
	fontFamily,
	fontColor,
	primaryColor,
	overlayColor,
	backgroundColor,
	borderColor,
} from './settings'

const styles = css({

	// Global
	'[role="button"]': {
		cursor: `pointer`,
		userSelect: `none`,
	},
	'&, *, *:before, *:after': {
		boxSizing: `border-box`,
	},

	// cart.js
	'.zygote': {
		color: fontColor,
		fontFamily,
		textRendering: `optimizeLegibility`,
		'-webkit-font-smoothing': `antialiased`,
		fontSize: 16,
	},
	'.zygoteBg': {
		position: `fixed`,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		background: overlayColor,
		visibility: `hidden`,
		opacity: 0,
		transition: `opacity .3s, visibility .3s`,
	},
	'.zygoteCart': {
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
	},
	'.zygoteCloseButton': {
		position: `absolute`,
		top: 25,
		right: 25,
		fontSize: `3em`,
		lineHeight: `22px`,
		cursor: `pointer`,
		fontWeight: 200,
	},
	'.zygoteHeader': {
		textAlign: `center`,
		marginBottom: 20,
	},
	'.zygoteStep': {
		display: `none`,
	},
	'.zygoteOnCartStep': {
		'.zygoteCartStep': {
			display: `block`,
		},
	},
	'.zygoteOnInfoStep': {
		'.zygoteInfoStep': {
			display: `block`,
		},
	},
	'.zygoteOnPaymentStep': {
		'.zygotePaymentStep': {
			display: `block`,
		},
	},
	'.zygoteOnSuccessStep': {
		'.zygoteSuccessStep': {
			display: `block`,
		},
	},
	'.zygoteOpen': {
		'.zygoteBg': {
			visibility: `visible`,
			opacity: 1,
		},
		'.zygoteCart': {
			transform: `translateX(0%)`,
		},
	},

	// added-to-cart-message.js
	'.zygoteAddMsg': {
		fontSize: `1.3em`,
		textAlign: `center`,
		fontStyle: `italic`,
	},

	// button.js
	'.zygoteBtn': {
		borderRadius: 20,
		textAlign: `center`,
		padding: 10,
		maxWidth: `100%`,
		width: 250,
		fontWeight: `bold`,
		margin: `10px auto`,
		display: `block`,
		fontSize: `1em`,
		outline: `none`,
		border: 0,
		cursor: `pointer`,
		':hover, :focus': {
			opacity: .75,
		},
		':disabled': {
			backgroundColor: `#ccc`,
			cursor: `default`,
			color: `#fff`,
			':hover': {
				opacity: 1,
			},
		},
	},
	'.zygotePrimaryBtn': {
		backgroundColor: primaryColor,
		color: backgroundColor,
	},
	'.zygoteSecondaryBtn': {
		border: `1px solid ${borderColor}`,
		color: fontColor,
	},

	// errors.js
	'.zygoteErrors': {
		listStyleType: `none`,
		margin: 0,
		padding: 0,
		'> li': {
			margin: `10px 0`,
			padding: `7px 10px`,
			background: `rgba(255, 0, 0, .1)`,
			border: `1px solid rgba(255, 0, 0, .3)`,
		},
	},

	// header.js
	'.zygoteSectionHeader': {
		fontSize: `1.2em`,
	},

	// info.js
	'.zygoteInfo': {
		listStyleType: `none`,
		margin: 0,
		padding: 0,
		'> li': {
			margin: `10px 0`,
			padding: `7px 10px`,
			background: `rgba(0, 255, 0, .1)`,
			border: `1px solid rgba(0, 255, 0, .6)`,
		},
	},

	// loading-animation.js
	'.zygoteLoading': {
		textAlign: `center`,
	},

	// processing.js
	'.zygoteProcessing': {
		textAlign: `center`,
		'> div:first-of-type': {
			margin: `100px auto 30px auto`,
		},
	},

	// product-list-item.js
	'.zygoteProdItem': {
		position: `relative`,
		':after': {
			content: `""`,
			display: `block`,
			clear: `both`,
		},
		'> div': {
			float: `left`,
		},
	},
	'.zygoteProdImage': {
		width: `100%`,
		maxWidth: 65,
		textAlign: `center`,
	},
	'.zygoteProdTitle': {
		marginTop: 5,
		fontWeight: `bold`,
		width: `100%`,
	},
	'.zygoteProdDesc': {
		width: `100%`,
		marginBottom: 10,
		marginTop: 5,
		fontSize: `.75em`,
	},
	'.zygoteProdQty': {
		userSelect: `none`,
		position: `absolute`,
		left: 85,
		top: 23,
		zIndex: 2,
	},
	'.zygoteProdQtyNum': {
		padding: `0 5px`,
		textAlign: `center`,
		minWidth: 30,
		display: `inline-block`,
		top: -3,
		position: `relative`,
	},
	'.zygoteProdPrice': {
		width: `50%`,
		textAlign: `right`,
		position: `absolute`,
		top: 23,
		right: 0,
	},
	'.zygoteProdX': {
		position: `absolute`,
		top: 21,
		right: 0,
		fontSize: `2em`,
		lineHeight: `16px`,
		fontWeight: 200,
		cursor: `pointer`,
	},
	'.zygoteProdItemEditable': {
		'.zygoteProdPrice': {
			right: 35,
		},
	},

	// product-list.js
	'.zygoteProdList': {
		listStyleType: `none`,
		margin: 0,
		padding: 0,
		paddingTop: 20,
		borderTop: `1px solid ${borderColor}`,
		'> li': {
			margin: `10px 0`,
			':first-of-type': {
				marginTop: 0,
			},
			':last-of-type': {
				marginBottom: 0,
			},
		},
		':after': {
			content: `""`,
			display: `block`,
			clear: `both`,
		},
	},

	// shipping-methods.js
	'.zygoteShipList': {
		listStyleType: `none`,
		margin: 0,
		padding: 0,
		userSelect: `none`,
		li: {
			marginTop: 10,
		},
	},
	'.zygoteShipLabel': {
		display: `flex`,
		cursor: `pointer`,
		position: `relative`,
		'> div': {
			':first-of-type': {
				width: `10%`,
			},
			':nth-of-type(2)': {
				width: `70%`,
			},
			':last-of-type': {
				width: `20%`,
				textAlign: `right`,
			},
		},
	},

	// small-button.js
	'.zygoteSmBtn': {
		display: `inline-block`,
		position: `relative`,
		width: 19,
		height: 19,
		borderRadius: `100%`,
		textAlign: `center`,
		fontWeight: `bold`,
		fontSize: 22,
		span: {
			position: `absolute`,
			marginTop: -1,
			top: `50%`,
			left: `50%`,
			transform: `translate(-50%, -50%)`,
		},
	},
	'.zygotePrimarySmBtn': {
		backgroundColor: primaryColor,
		color: backgroundColor,
	},
	'.zygoteSecondarySmBtn': {
		backgroundColor: borderColor,
		color: backgroundColor,
	},

	// stages-header.js
	'.zygoteStepsHeader': {
		listStyleType: `none`,
		padding: 0,
		margin: 0,
		fontWeight: `bold`,
		textAlign: `center`,
		color: `#C0BFBF`,
	},
	'.zygoteStepLink': {
		display: `inline-block`,
		padding: 10,
		width: 140,
		borderBottom: `3px solid #C0BFBF`,
	},
	'.zygoteActiveStepLink': {
		color: primaryColor,
		borderBottom: `3px solid ${primaryColor}`,
		cursor: `default !important`,
	},

	// totals.js
	'.zygoteTotals': {
		listStyleType: `none`,
		margin: 0,
		marginTop: 30,
		marginBottom: 30,
		padding: 0,
		borderTop: `1px solid ${borderColor}`,
		li: {
			margin: `10px 0`,
			':after': {
				content: `""`,
				display: `block`,
				clear: `both`,
			},
			'> div': {
				width: `50%`,
				float: `left`,
				':last-of-type': {
					textAlign: `right`,
				},
			},
		},
	},
	'.zygoteGrandTotal': {
		fontWeight: `bold`,
		paddingTop: 20,
		borderTop: `1px solid ${borderColor}`,
	},
})

export default styles