import Cookie from 'js-cookie';
import {
  cartState,
  itemState,
  zygoteApi,
  cost,
  userInfo
} from './components/state';

const removeCookies = () => {
  Object.keys(Cookie.get()).map(cookie => {
    Cookie.remove(cookie);
  });
  console.log('Cookies Removed');
};

const openCart = () => {
  cartState.setState({ open: true });
  document.body.classList.add('zygoteOpen');
};

const closeCart = () => {
  cartState.setState({ open: false });
  document.body.classList.remove('zygoteOpen');
};

const toggleCart = () => {
  cartState.state.open ? closeCart() : openCart();
};

const addItems = items => {
  let updated = [...itemState.state.items];
  if (Array.isArray(items)) {
    items.forEach(newItem => {
      if (!newItem.id || !newItem.price) {
        console.warn('Items must have an Id and a price');
        return;
      }
      if (!newItem.qty) {
        newItem.qty = 1;
      }
      if (updated.length === 0) {
        updated = [...updated, newItem];
      } else {
        const foundItem = updated.find(({ id }) => id === newItem.id);
        foundItem ? foundItem.qty++ : (updated = [...updated, newItem]);
      }
    });
  } else {
    if (!items.id || !items.price) {
      console.warn('Items must have an Id and a price');
      return;
    }
    if (!items.qty) {
      items.qty = 1;
    }
    if (updated.length === 0) {
      updated = [...updated, items];
    } else {
      const foundItem = updated.find(({ id }) => id === items.id);
      foundItem ? foundItem.qty++ : (updated = [...updated, items]);
    }
  }
  itemState.setState({ items: updated });
};

const removeAllItems = () => {
  itemState.setState({ items: [] });
};

const removeItem = itemId => {
  const removedItem = itemState.state.items.find(({ id }) => id === itemId);

  const index = itemState.state.items.indexOf(removedItem);
  const updated = [...itemState.state.items];
  updated.splice(index, 1);
  itemState.setState({
    items: updated
  });
};

const showNav = () => {
  cartState.setState({ showNav: true });
};

const hideNav = () => {
  cartState.setState({ showNav: false });
};

const chooseNavTab = tab => {
  if (isNaN(tab)) {
    console.warn('Tab must be a number.');
    return;
  }
  if (tab > 2) {
    console.warn('Tab must be lower than 2.');
  }

  cartState.setState({ tab });
};

const api = api => {
  if (api.length <= 0) {
    console.warn('Must provide an api if you want to set the api.');
    return;
  }
  zygoteApi.setState({ api });
};

const site = site => {
  cartState.setState({ site });
};

const resetCart = () => {
  zygoteApi.setState({
    api:
      'https://hzrxrm0s9b.execute-api.us-east-1.amazonaws.com/staging/handler'
  });
  itemState.setState({ items: [], coupon: '' });
  cartState.setState({
    open: false,
    tab: 0,
    errors: null,
    apiErrors: null,
    loading: false,
    showNav: false,
    site: ''
  });
  cost.setState({
    tax: 0,
    shipping: 0,
    total: 0,
    shippingOptions: null
  });
  userInfo.setState({
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
  });
};

export {
  openCart,
  addItems,
  closeCart,
  toggleCart,
  removeItem,
  removeAllItems,
  showNav,
  hideNav,
  chooseNavTab,
  api,
  resetCart,
  removeCookies,
  site
};
