import { State } from 'statable';
import Cookie from 'js-cookie';

const cartState = new State({
  open: true,
  tab: 2,
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
        items: [
          {
            desc: 'Table tennis paddle.',
            id: 't8591w',
            image: 'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075',
            name: 'Cajun Thing',
            price: 21.99,
            qty: 1,
            url: 'https://pingpong.comproduct/t1265'
          },
          {
            desc:
              'Table tennis paddle. This is an item, Table tennis paddle. This is an itemTable tennis paddle. This is an itemTable tennis paddle. This is an itemTable tennis paddle. This is an itemTable tennis paddle. This is an item',
            id: 't8591w',
            image: 'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075',
            name: 'Cajun Thing 22234',
            price: 21.99,
            qty: 1,
            url: 'https://pingpong.comproduct/t1265'
          }
        ],
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
        specialOffers: true,
        preOrderInfo: null,
        shipping: {
          shippingFullName: '',
          shippingEmail: '',
          shippingPhone: '',
          shippingApt: '',
          shippingCompanyName: '',
          shippingAddress: '',
          shippingCity: '',
          shippingState: '',
          shippingZip: ''
        },
        payment: {
          billingNumber: '',
          billingSecurity: '',
          billingMonth: '',
          billingYear: '',
          billingAddress: '',
          billingCity: '',
          billingState: '',
          billingZip: '',
          billingPhone: '',
          billingApt: '',
          billingCompnayName: ''
        }
      }
);

userInfo.subscribe(() => {
  Cookie.set('userInfo', userInfo.state, { expires: 5 });
});

export { cartState, userInfo, itemState, zygoteApi, cost };
