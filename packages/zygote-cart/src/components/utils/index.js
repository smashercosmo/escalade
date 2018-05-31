import React from 'react';
import validator from 'validator';
import states from 'datasets-us-states-names-abbr';

const yourPayment = {
  sections: [
    {
      title: '3. Payment',
      fields: [
        {
          label: 'Card Number',
          class: 'zygoteBillingNumber',
          name: 'Card Number'
        },
        {
          label: 'Expiration',
          class: 'zygoteBillingExpiration',
          name: 'Expiration'
        },
        { label: 'CVV', class: 'zygoteBillingSecurity', name: 'CVV code' },
        {
          label: 'Same Billing and Shipping Address',
          type: 'checkbox',
          class: 'zygoteBillingSame',
          name: 'Billing Same'
        }
      ]
    }
  ],
  additionalFields: {
    sections: [
      {
        title: '3.5 What is your billing address?',
        fields: [
          {
            label: 'Address',
            class: 'zygoteBillingAddress',
            name: 'Address'
          },
          {
            type: 'toggle',
            toggleLabel: 'Add an Apt/Suite #',
            label: 'Apt/Suite #',
            class: 'zygoteBillingApt',
            name: 'Apt'
          },
          {
            type: 'toggle',
            toggleLabel: 'Add a Company Name',
            label: 'Company Name',
            class: 'zygoteBillingCompanyName',
            name: 'Company Name'
          },
          { label: 'City', class: 'zygoteBillingCity', name: 'City' },
          {
            label: 'State',
            class: 'zygoteBillingState',
            type: 'select',
            name: 'State',
            options: Object.keys(states).map(state => {
              return { value: states[state], label: state };
            })
          },
          {
            label: 'Zip Code',
            class: 'zygoteBillingZip',
            name: 'Zip'
          }
        ]
      }
    ]
  }
};

const yourDetails = {
  sections: [
    {
      title: "1. Let's get started",
      fields: [
        {
          label: 'Full Name',
          class: 'zygoteShippingFullName',
          name: 'Full Name'
        },
        { label: 'Email', class: 'zygoteShippingEmail', name: 'Email' },
        {
          label: 'Phone',
          span: '(for shipping related questions)',
          class: 'zygoteShippingPhone',
          name: 'Phone'
        },
        {
          label: "I'd like to recieve news and special offeres from",
          class: 'zygoteShippingSpecialOffers',
          name: 'Special Offers',
          type: 'checkbox'
        }
      ]
    },
    {
      title: '2. Where should we deliver?',
      fields: [
        {
          label: 'Address',
          class: 'zygoteShippingAddress',
          name: 'Address'
        },
        {
          type: 'toggle',
          toggleLabel: 'Add an Apt/Suite #',
          label: 'Apt/Suite #',
          class: 'zygoteShippingApt',
          name: 'Apt'
        },
        {
          type: 'toggle',
          toggleLabel: 'Add a Company Name',
          label: 'Company Name',
          class: 'zygoteShippingCompanyName',
          name: 'Company Name'
        },
        { label: 'City', class: 'zygoteShippingCity', name: 'City' },
        {
          label: 'State',
          class: 'zygoteShippingState',
          type: 'select',
          name: 'State',
          options: Object.keys(states).map(state => {
            return { value: states[state], label: state };
          })
        },
        {
          label: 'Zip Code',
          class: 'zygoteShippingZip',
          name: 'Zip'
        }
      ]
    }
  ]
};

const cartContent = {
  tabs: [
    {
      title: 'Your Cart',
      class: 'zygoteCartTab'
    },
    {
      title: 'Your Details',
      class: 'zygoteShipTab'
    },
    {
      title: 'Your Payment',
      class: 'zygotePayTab'
    },
    {
      title: 'Confirm Order',
      class: 'zygoteConfirmTab'
    }
  ],
  nav: [
    { title: '1.Your Details', active: 1 },
    { title: '2.Payment', active: 2 }
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
    if (!validator.isEmail(shipping['shippingEmail'])) {
      errors.shipping['shippingEmail'] = name =>
        `Please enter a valid ${name}.`;
    }
    if (!validator.isPostalCode(shipping['shippingZip'], 'any')) {
      errors.shipping['shippingZip'] = name => `Please enter a valid ${name}.`;
    }
    if (!validator.isMobilePhone(shipping['shippingPhone'], 'any')) {
      errors.shipping['shippingPhone'] = name =>
        `Please enter a valid ${name}.`;
    }
    if (!shipping[key] || shipping[key].length === 0) {
      errors.shipping[key] = name => `Please enter a valid ${name}.`;
    }
  });

  const paymentKeys = Object.keys(payment);
  paymentKeys.forEach(key => {
    if (!validator.isCreditCard(payment['billingNumber'])) {
      errors.payment['billingNumber'] = name => `Please enter a valid ${name}.`;
    }
    if (!payment[key] || payment[key].length === 0) {
      errors.payment[key] = name => `Please enter a valid ${name}.`;
    }
  });
  if (!addressSame) {
    const paymentAddressKeys = Object.keys(paymentAddress);
    paymentAddressKeys.forEach(key => {
      if (!validator.isPostalCode(paymentAddress['billingZip'], 'any')) {
        errors.paymentAddress['billingZip'] = name =>
          `Please enter a valid ${name}.`;
      }
      if (!validator.isMobilePhone(paymentAddress['billingPhone'], 'any')) {
        errors.paymentAddress['billingPhone'] = name =>
          `Please enter a valid ${name}.`;
      }
      if (!paymentAddress[key] || paymentAddress[key].length === 0) {
        errors.paymentAddress[key] = name => `Please enter a valid ${name}.`;
      }
    });
  }
  return errors;
};

export { yourDetails, yourPayment, cartContent, validateInputs };
