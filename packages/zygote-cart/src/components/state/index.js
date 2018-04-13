import { State } from 'statable';
import Cookie from 'js-cookie';

const cartState = new State({
  open: false,
  tab: 0,
  errors: null,
  apiErrors: null,
  loading: false,
  showNav: false,
  site: ''
});

const cost = new State({
  tax: 0,
  shipping: 0,
  total: 0,
  shippingOptions: null
});

const itemState = new State(
  Cookie.get('item')
    ? JSON.parse(Cookie.get('item'))
    : {
        items: [],
        coupon: ''
      }
);

itemState.subscribe(() => {
  Cookie.set('item', itemState.state, { expires: 5 });
});

const zygoteApi = new State({
  api: 'https://hzrxrm0s9b.execute-api.us-east-1.amazonaws.com/staging/handler'
});

const userInfo = new State(
  Cookie.get('userInfo')
    ? JSON.parse(Cookie.get('userInfo'))
    : {
        addressSame: true,
        preOrderInfo: null,
        shipping: {
          ShippingFirst: '',
          ShippingLast: '',
          ShippingAddress1: '',
          ShippingCity: '',
          ShippingState: '',
          ShippingZip: '',
          ShippingPhone: '',
          ShippingEmail: '',
          ShippingAddress2: ''
        },
        payment: {
          BillingNumber: '',
          BillingSecurity: '',
          BillingMonth: '',
          BillingYear: ''
        },
        paymentAddress: {
          BillingFirst: '',
          BillingLast: '',
          BillingAddress1: '',
          BillingCity: '',
          BillingState: '',
          BillingZip: '',
          BillingPhone: '',
          BillingAddress2: ''
        }
      }
);

userInfo.subscribe(() => {
  Cookie.set('userInfo', userInfo.state, { expires: 5 });
});

export { cartState, userInfo, itemState, zygoteApi, cost };
