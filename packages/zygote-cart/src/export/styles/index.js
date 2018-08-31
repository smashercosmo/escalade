import { css } from 'emotion'
import { styles as cart } from '../components/cart'
import { styles as addedToCartMsg } from '../components/added-to-cart-message'
import { styles as button } from '../components/button'
import { styles as errors } from '../components/errors'
import { styles as header } from '../components/header'
import { styles as info } from '../components/info'
import { styles as loading } from '../components/loading-animation'
import { styles as processing } from '../components/processing'
import { styles as prodItem } from '../components/product-list-item'
import { styles as prodList } from '../components/product-list'
import { styles as shippingMethods } from '../components/shipping-methods'
import { styles as smallButton } from '../components/small-button'
import { styles as stagesHeader } from '../components/stages-header'
import { styles as totals } from '../components/totals'
import { styles as cardList } from '../components/card-list'
import { styles as securityIcon } from '../components/card-list/security'
import { styles as checkbox } from '../components/inputs/checkbox'
import { styles as radio } from '../components/inputs/radio'
import { styles as coupon } from '../components/inputs/coupon'
import { styles as input } from '../components/inputs/input'
import { styles as select } from '../components/inputs/select'
import { styles as toggle } from '../components/inputs/toggle'
import { styles as cartStep } from '../components/stages/cart'
import { styles as infoStep } from '../components/stages/info'
import { styles as paymentStep } from '../components/stages/payment'
import { styles as successStep } from '../components/stages/success'
import { styles as stripe } from '../components/stripe'
import { styles as stripeInput } from '../components/stripe/input'

const styles = css({
	...cart,
	...addedToCartMsg,
	...button,
	...errors,
	...header,
	...info,
	...loading,
	...processing,
	...prodItem,
	...prodList,
	...shippingMethods,
	...smallButton,
	...stagesHeader,
	...totals,
	...cardList,
	...securityIcon,
	...checkbox,
	...radio,
	...coupon,
	...input,
	...select,
	...toggle,
	...cartStep,
	...infoStep,
	...paymentStep,
	...successStep,
	...stripe,
	...stripeInput,
})

export default styles