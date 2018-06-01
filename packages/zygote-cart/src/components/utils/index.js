import React from 'react';
import states from 'datasets-us-states-names-abbr';
import { userInfo, cartState } from '../state';

const yourPayment = {
  sections: [
    {
      title: '3. Payment',
      fields: [
        {
          label: 'Card Number',
          class: 'zygoteBillingNumber',
          name: 'Number',
          formattedName: 'billingNumber'
        },
        {
          label: 'Expiration',
          class: 'zygoteBillingExpiration',
          name: 'Expiration',
          formattedName: 'billingExpiration'
        },
        {
          label: 'CVV',
          class: 'zygoteBillingSecurity',
          name: 'Security',
          formattedName: 'billingSecurity'
        },
        {
          label: 'Same Billing and Shipping Address',
          type: 'checkbox',
          class: 'zygoteBillingSame',
          name: 'Billing Same',
          formattedName: 'billingBillingSame'
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
            name: 'Address',
            formattedName: 'billingAddress'
          },
          {
            type: 'toggle',
            toggleLabel: 'Add an Apt/Suite #',
            label: 'Apt/Suite #',
            class: 'zygoteBillingApt',
            name: 'Apt',
            formattedName: 'billingApt'
          },
          {
            type: 'toggle',
            toggleLabel: 'Add a Company Name',
            label: 'Company Name',
            class: 'zygoteBillingCompanyName',
            name: 'Company Name',
            formattedName: 'billingCompanyName'
          },
          {
            label: 'City',
            class: 'zygoteBillingCity',
            name: 'City',
            formattedName: 'billingCity'
          },
          {
            label: 'State',
            class: 'zygoteBillingState',
            type: 'select',
            name: 'State',
            formattedName: 'billingState',
            options: Object.keys(states).map(state => {
              return { value: states[state], label: state };
            })
          },
          {
            label: 'Zip Code',
            class: 'zygoteBillingZip',
            name: 'Zip',
            formattedName: 'billingZip'
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
          name: 'Full Name',
          formattedName: 'shippingFullName'
        },
        {
          label: 'Email',
          class: 'zygoteShippingEmail',
          name: 'Email',
          formattedName: 'shippingEmail'
        },
        {
          label: 'Phone',
          span: '(for shipping related questions)',
          class: 'zygoteShippingPhone',
          name: 'Phone',
          formattedName: 'shippingPhone'
        },
        {
          label: "I'd like to recieve news and special offeres from",
          class: 'zygoteShippingSpecialOffers',
          name: 'Special Offers',
          type: 'checkbox',
          formattedName: 'shippingSpecialOffers'
        }
      ]
    },
    {
      title: '2. Where should we deliver?',
      fields: [
        {
          label: 'Address',
          class: 'zygoteShippingAddress',
          name: 'Address',
          formattedName: 'shippingAddress'
        },
        {
          type: 'toggle',
          toggleLabel: 'Add an Apt/Suite #',
          label: 'Apt/Suite #',
          class: 'zygoteShippingApt',
          name: 'Apt',
          formattedName: 'shippingApt'
        },
        {
          type: 'toggle',
          toggleLabel: 'Add a Company Name',
          label: 'Company Name',
          class: 'zygoteShippingCompanyName',
          name: 'Company Name',
          formattedName: 'shippingCompanyName'
        },
        {
          label: 'City',
          class: 'zygoteShippingCity',
          name: 'City',
          formattedName: 'shippingCity'
        },
        {
          label: 'State',
          class: 'zygoteShippingState',
          type: 'select',
          name: 'State',
          formattedName: 'shippingState',
          options: Object.keys(states).map(state => {
            return { value: states[state], label: state };
          })
        },
        {
          label: 'Zip Code',
          class: 'zygoteShippingZip',
          name: 'Zip',
          formattedName: 'shippingZip'
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
    { title: '1. Your Details', active: 1 },
    { title: '2. Payment', active: 2 }
  ]
};

export { yourDetails, yourPayment, cartContent };
