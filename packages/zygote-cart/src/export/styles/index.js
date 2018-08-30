import { css } from 'emotion'
import {
	fontFamily,
	fontColor,
	overlayColor,
	backgroundColor,
} from './settings'

const styles = css({

	// cart.js
	'.zygote': {
		color: fontColor,
		fontFamily,
		textRendering: `optimizeLegibility`,
		'-webkit-font-smoothing': `antialiased`,
		fontSize: 16,
	},
	'[role="button"]': {
		cursor: `pointer`,
		userSelect: `none`,
	},
	'&, *, *:before, *:after': {
		boxSizing: `border-box`,
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
})

export default styles