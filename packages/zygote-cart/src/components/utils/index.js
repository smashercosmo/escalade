import React from 'react';
import validator from 'validator';

const payment = {
  fields: [
    [
      {
        label: 'Card Number',
        class: 'zygoteBillingNumber',
        name: 'Credit Card Number'
      },
      { label: 'cvc', class: 'zygoteBillingSecurity', name: 'CVC code' }
    ],
    [
      {
        label: 'Expiration Month',
        class: 'zygoteBillingMonth',
        type: 'select',
        options: [
          { value: 'January', label: 'January' },
          { value: 'February', label: 'February' },
          { value: 'March', label: 'March' },
          { value: 'April', label: 'April' },
          { value: 'May', label: 'May' },
          { value: 'June', label: 'June' },
          { value: 'July', label: 'July' },
          { value: 'August', label: 'August' },
          { value: 'September', label: 'September' },
          { value: 'October', label: 'October' },
          { value: 'November', label: 'November' },
          { value: 'December', label: 'December' }
        ],
        name: 'Expiration Month'
      },
      {
        label: 'Expiration Year',
        class: 'zygoteBillingYear',
        type: 'select',
        options: [
          { value: '2018', label: '2018' },
          { value: '2019', label: '2019' },
          { value: '2020', label: '2020' },
          { value: '2021', label: '2021' },
          { value: '2022', label: '2022' },
          { value: '2023', label: '2023' },
          { value: '2024', label: '2024' },
          { value: '2025', label: '2025' },
          { value: '2026', label: '2026' },
          { value: '2027', label: '2027' },
          { value: '2028', label: '2028' },
          { value: '2029', label: '2029' },
          { value: '2030', label: '2030' },
          { value: '2031', label: '2031' },
          { value: '2032', label: '2032' },
          { value: '2033', label: '2033' }
        ],
        name: 'Expiration Year'
      }
    ]
  ],
  additionalFields: [
    [
      { label: 'First Name', class: 'zygoteBillingFirst', name: 'First Name' },
      { label: 'Last Name', class: 'zygoteBillingLast', name: 'Last name' },
      {
        label: 'Street Address',
        class: 'zygoteBillingAddress1',
        name: 'Street Address'
      },
      {
        label: 'Street Address 2 (Not Required)',
        class: 'zygoteBillingAddress2',
        name: 'Street Address 2'
      }
    ],
    [
      { label: 'City', class: 'zygoteBillingCity', name: 'City' },
      {
        label: 'State',
        class: 'zygoteBillingState',
        type: 'select',
        name: 'State'
      },
      {
        label: 'Zip / Postal Code',
        class: 'zygoteBillingZip',
        name: 'Zip Code'
      },
      { label: 'Phone', class: 'zygoteBillingPhone', name: 'Phone Number' }
    ]
  ]
};

const shipping = {
  fields: [
    [
      { label: 'First Name', class: 'zygoteShippingFirst', name: 'First Name' },
      { label: 'Last Name', class: 'zygoteShippingLast', name: 'Last Name' },
      {
        label: 'Street Address',
        class: 'zygoteShippingAddress1',
        name: 'Street Address'
      },
      {
        label: 'Street Address 2 (Not Required)',
        class: 'zygoteShippingAddress2',
        name: 'Street Address 2'
      }
    ],
    [
      { label: 'City', class: 'zygoteShippingCity', name: 'City' },
      {
        label: 'State',
        class: 'zygoteShippingState',
        type: 'select',
        name: 'State'
      },
      {
        label: 'Zip / Postal Code',
        class: 'zygoteShippingZip',
        name: 'Zip Code'
      }
    ],
    [
      { label: 'Phone', class: 'zygoteShippingPhone', name: 'Phone Number' },
      { label: 'Email', class: 'zygoteShippingEmail', name: 'Email' }
    ]
  ]
};

const cartContent = {
  tabs: [
    {
      title: 'Your Cart',
      class: 'zygoteCartTab',
      icon: (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
        >
          <polygon points="448 336 182 336 69.5 80 0.008 80 0.008 48 90.5 48 202 304 448 304" />
          <path d="m288 416c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 22 48 48z" />
          <path d="m448 416c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 22 48 48z" />
          <polygon points="499 144 512 112 160 112 173 144" />
          <polygon points="211 240 224 272 448 272 461 240" />
          <polygon points="486 176 186 176 198 208 474 208" />
        </svg>
      )
    },
    {
      title: 'Shipping Address',
      class: 'zygoteShipTab',
      icon: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 612 612"
        >
          <g>
            <g>
              <path d="M226.764,375.35c-28.249,0-51.078,22.91-51.078,51.16c0,28.166,22.829,51.078,51.078,51.078s51.078-22.912,51.078-51.078 C277.841,398.26,255.013,375.35,226.764,375.35z M226.764,452.049c-14.125,0-25.54-11.498-25.54-25.541 c0-14.123,11.415-25.539,25.54-25.539c14.124,0,25.539,11.416,25.539,25.539C252.302,440.551,240.888,452.049,226.764,452.049z M612,337.561v54.541c0,13.605-11.029,24.635-24.636,24.635h-26.36c-4.763-32.684-32.929-57.812-66.927-57.812 c-33.914,0-62.082,25.129-66.845,57.812H293.625c-4.763-32.684-32.93-57.812-66.845-57.812c-33.915,0-62.082,25.129-66.844,57.812 h-33.012c-13.606,0-24.635-11.029-24.635-24.635v-54.541H612L612,337.561z M494.143,375.35c-28.249,0-51.16,22.91-51.16,51.16 c0,28.166,22.912,51.078,51.16,51.078c28.166,0,51.077-22.912,51.077-51.078C545.22,398.26,522.309,375.35,494.143,375.35z M494.143,452.049c-14.125,0-25.539-11.498-25.539-25.541c0-14.123,11.414-25.539,25.539-25.539 c14.042,0,25.539,11.416,25.539,25.539C519.682,440.551,508.185,452.049,494.143,452.049z M602.293,282.637l-96.817-95.751 c-6.159-6.077-14.453-9.526-23.076-9.526h-48.86v-18.313c0-13.631-11.004-24.635-24.635-24.635H126.907 c-13.55,0-24.635,11.005-24.635,24.635v3.86L2.3,174.429l177.146,23.068L0,215.323l178.814,25.423L0,256.25l102.278,19.29 l-0.007,48.403h509.712v-17.985C611.983,297.171,608.452,288.796,602.293,282.637z M560.084,285.839h-93.697 c-2.135,0-3.86-1.724-3.86-3.859v-72.347c0-2.135,1.725-3.86,3.86-3.86h17.82c0.985,0,1.971,0.411,2.71,1.068l75.796,72.347 C565.257,281.569,563.532,285.839,560.084,285.839z" />
            </g>
          </g>
        </svg>
      )
    },
    {
      title: 'Payment Method',
      class: 'zygotePayTab',
      icon: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 63.665 63.664"
        >
          <g>
            <g>
              <path d="M4.167,52.145h55.331c2.298,0,4.167-1.895,4.167-4.222V15.741c0-2.328-1.869-4.222-4.167-4.222H4.167 C1.869,11.52,0,13.413,0,15.741v32.182C0,50.25,1.869,52.145,4.167,52.145z M61.582,47.923c0,1.179-0.936,2.139-2.084,2.139H4.167 c-1.149,0-2.083-0.96-2.083-2.139v-2.462h59.499V47.923z M2.083,15.741c0-1.179,0.935-2.138,2.083-2.138h55.331 c1.148,0,2.084,0.959,2.084,2.138v19.302H2.083V15.741z" />
            </g>
          </g>
        </svg>
      )
    },
    {
      title: 'Confirm Order',
      class: 'zygoteConfirmTab',
      icon: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 490.05 490.05"
        >
          <g>
            <g>
              <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z" />
            </g>
          </g>
        </svg>
      )
    }
  ]
};

const validateInputs = userInfo => {
  const { shipping, payment, addressSame, paymentAddress } = userInfo;
  let errors = {
    shipping: {},
    payment: {},
    paymentAddress: {}
  };

  const shippingKeys = Object.keys(shipping);
  shippingKeys.forEach(key => {
    if (key === 'ShippingAddress2') {
      return;
    }
    if (!validator.isEmail(shipping['ShippingEmail'])) {
      errors.shipping['ShippingEmail'] = name =>
        `Please enter a valid ${name}.`;
    }
    if (!validator.isPostalCode(shipping['ShippingZip'], 'any')) {
      errors.shipping['ShippingZip'] = name => `Please enter a valid ${name}.`;
    }
    if (!validator.isMobilePhone(shipping['ShippingPhone'], 'any')) {
      errors.shipping['ShippingPhone'] = name =>
        `Please enter a valid ${name}.`;
    }
    if (!shipping[key] || shipping[key].length === 0) {
      errors.shipping[key] = name => `Please enter a valid ${name}.`;
    }
  });

  const paymentKeys = Object.keys(payment);
  paymentKeys.forEach(key => {
    if (!validator.isCreditCard(payment['BillingNumber'])) {
      errors.payment['BillingNumber'] = name => `Please enter a valid ${name}.`;
    }
    if (!payment[key] || payment[key].length === 0) {
      errors.payment[key] = name => `Please enter a valid ${name}.`;
    }
  });
  if (!addressSame) {
    const paymentAddressKeys = Object.keys(paymentAddress);
    paymentAddressKeys.forEach(key => {
      if (key === 'BillingAddress2') {
        return;
      }
      if (!validator.isPostalCode(paymentAddress['BillingZip'], 'any')) {
        errors.paymentAddress['BillingZip'] = name =>
          `Please enter a valid ${name}.`;
      }
      if (!validator.isMobilePhone(paymentAddress['BillingPhone'], 'any')) {
        errors.paymentAddress['BillingPhone'] = name =>
          `Please enter a valid ${name}.`;
      }
      if (!paymentAddress[key] || paymentAddress[key].length === 0) {
        errors.paymentAddress[key] = name => `Please enter a valid ${name}.`;
      }
    });
  }
  return errors;
};

export { shipping, payment, cartContent, validateInputs };
