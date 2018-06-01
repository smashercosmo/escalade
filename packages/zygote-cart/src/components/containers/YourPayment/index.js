import React, { Component } from 'react';
import { Subscribe } from 'statable';
import validator from 'validator';
import cardValid from 'card-validator';
import {
  Icon_Visa,
  Icon_MasterCard,
  Icon_AmericanExpress,
  Icon_Discover
} from 'material-ui-credit-card-icons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaCreditCardAlt from 'react-icons/lib/fa/credit-card-alt';

import { yourPayment } from '../../utils';
import { userInfo, cartState, cost } from '../../state';
import { ShippingOptions, Coupon, OrderSummary } from '../../containers';
import styles from './styles';
import { address } from 'ip';

const inLineStyles = {
  cardIcon: {
    height: '30px',
    width: '30px',
    transform: 'translateY(-15%)'
  }
};

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      inputErrors: {},
      cardType: null
    };
    this.renderField = this.renderField.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.update = this.update.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  componentDidUpdate() {
    let { errors } = cartState.state;
    const { paymentAddress } = userInfo.state;
    if (this.state.checked) {
      Object.keys(paymentAddress).forEach(k => {
        if (errors) {
          if (errors[k]) {
            delete errors[k];
          }
        }
      });
    }
    if (typeof errors === 'object') {
      if (errors && Object.keys(errors).length === 0) {
        cartState.setState({ errors: null });
      }
      if (this.state.inputErrors === errors) {
        return;
      }
      this.setState({
        inputErrors: errors
      });
    }
  }

  handleCheck() {
    this.setState({ checked: !this.state.checked });
    userInfo.setState({ addressSame: !this.state.checked });
  }

  update(e) {
    e.preventDefault();
    const { value } = e.target;
    const { inputErrors } = this.state;
    let updatedErrs = { ...inputErrors };
    const name = `billing${e.target.name.replace(/\s/g, '')}`;
    userInfo.setState({
      payment: { ...userInfo.state.payment, [name]: e.target.value }
    });
    if (value.length === 0) {
      updatedErrs[name] = name => `Please enter a valid ${name}`;
    } else if (value.length > 0) {
      delete updatedErrs[name];
    }
    if (e.target.name === 'Number' && !cardValid.number(value).isValid) {
      updatedErrs[name] = name => `Please enter a valid ${name}`;

      const numberValidation = cardValid.number(value);
      if (!numberValidation.isPotentiallyValid) {
        this.setState({ cardType: null });
      }
      if (numberValidation.isPotentiallyValid && numberValidation.card) {
        this.setState({ cardType: numberValidation.card.type });
      }
    } else if (e.target.name === 'Number' && cardValid.number(value).isValid) {
      delete updatedErrs[name];
    }

    if (Object.keys(updatedErrs).length > 0) {
      cartState.setState({ errors: true });
    } else {
      cartState.setState({ errors: null });
    }

    this.setState({ inputErrors: updatedErrs });
  }

  updateAddress(e) {
    e.preventDefault();
    const { value } = e.target;
    const { inputErrors } = this.state;
    let updatedErrs = { ...inputErrors };
    const name = `billing${e.target.name.replace(/\s/g, '')}`;
    userInfo.setState({
      paymentAddress: {
        ...userInfo.state.paymentAddress,
        [name]: e.target.value
      }
    });
    if (value.length === 0) {
      updatedErrs[name] = name => `Please enter a valid ${name}`;
    } else if (value.length > 0) {
      delete updatedErrs[name];
    }
    if (e.target.name === 'Zip' && !validator.isPostalCode(value, 'any')) {
      updatedErrs[name] = name => `Please enter a valid ${name}.`;
    } else if (
      e.target.name === 'Zip' &&
      validator.isPostalCode(value, 'any')
    ) {
      delete updatedErrs[name];
    }
    if (Object.keys(updatedErrs).length > 0) {
      cartState.setState({ errors: true });
    } else {
      cartState.setState({ errors: null });
    }

    this.setState({ inputErrors: updatedErrs });
  }

  renderField(func, field, i, user) {
    const { inputErrors } = this.state;
    const type = func === 'update' ? 'payment' : 'paymentAddress';
    switch (field.type) {
      case 'checkbox':
        return (
          <div
            key={i}
            className="zygoteCheckboxContainer"
            onClick={this.handleCheck}
          >
            <label htmlFor={field.class}>
              {`${field.label}`}
              <input
                type="checkbox"
                name={field.name}
                className={field.class}
                checked={this.state.checked}
                // onChange added to use checked in react
                onChange={() => {}}
              />
              <span
                className="zygoteCheckbox"
                onClick={() =>
                  this.setState({
                    checked: !this.state.checked
                  })
                }
              />
            </label>
            <style jsx>{styles}</style>
          </div>
        );
      case 'toggle':
        return (
          <div
            key={i}
            className={`${
              inputErrors
                ? inputErrors[field.formattedName]
                  ? 'zygoteInputErr'
                  : ''
                : ''
            } ${field.class}Container zygoteToggleFieldWrapper`}
          >
            {this.state[field.name] ? (
              <div>
                <input
                  type="text"
                  className={field.class}
                  name={field.name}
                  value={user[type][field.formattedName]}
                  onChange={this[func]}
                  placeholder={`${field.label} ${field.span ? field.span : ''}`}
                />
                {inputErrors ? (
                  inputErrors[field.formattedName] ? (
                    <div className="zygoteInputMsg">
                      {inputErrors[field.formattedName](field.name)}
                    </div>
                  ) : null
                ) : null}
              </div>
            ) : (
              <div className="zygoteToggleFieldContainer">
                <div
                  className="zygoteEscaAdd"
                  onClick={() =>
                    this.setState({
                      [field.name]: !this.state[field.name]
                    })
                  }
                >
                  +
                </div>
                <div className={`zygoteToggleField`}>{field.toggleLabel}</div>
                <style jsx>{styles}</style>
              </div>
            )}
          </div>
        );
      case 'select':
        return (
          <div
            key={i}
            className={`${
              inputErrors
                ? inputErrors[field.formattedName]
                  ? 'zygoteInputErr'
                  : ''
                : ''
            } ${field.class}Container zygoteSelect`}
          >
            <select
              type="text"
              className={field.class}
              name={field.name}
              value={user[type][field.formattedName]}
              onChange={this[func]}
            >
              <option value="">State</option>
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {inputErrors ? (
              inputErrors[field.formattedName] ? (
                <div className="zygoteInputMsg">
                  {inputErrors[field.formattedName](field.name)}
                </div>
              ) : null
            ) : null}
            <style jsx>{styles}</style>
          </div>
        );
      default:
        return (
          <div
            key={i}
            className={`${
              inputErrors
                ? inputErrors[field.formattedName]
                  ? 'zygoteInputErr'
                  : ''
                : ''
            } ${field.class}Container`}
          >
            <input
              type="text"
              className={field.class}
              name={field.name}
              onChange={this[func]}
              value={user[type][field.formattedName]}
              placeholder={`${field.label} ${field.span ? field.span : ''}`}
            />
            {field.name === 'Number' ? (
              <div className="zygoteCardPreview">
                <MuiThemeProvider>
                  {this.renderCard(this.state.cardType)}
                </MuiThemeProvider>
              </div>
            ) : null}

            {inputErrors ? (
              inputErrors[field.formattedName] ? (
                <div className="zygoteInputMsg">
                  {inputErrors[field.formattedName](field.name)}
                </div>
              ) : null
            ) : null}
            <style jsx>{styles}</style>
          </div>
        );
    }
  }

  renderCard(type) {
    switch (type) {
      case 'visa':
        return;
        <div className="zygotePaymentIcon">
          <Icon_Visa style={inLineStyles.cardIcon} />
        </div>;
      case 'mastercard':
        return (
          <div className="zygotePaymentIcon">
            <Icon_MasterCard style={inLineStyles.cardIcon} />
          </div>
        );
      case 'americanexpress':
        return;
        <div className="zygotePaymentIcon">
          <Icon_AmericanExpress style={inLineStyles.cardIcon} />
        </div>;
      case 'discover':
        return (
          <div className="zygotePaymentIcon">
            <Icon_Discover style={inLineStyles.cardIcon} />
          </div>
        );
      default:
        return (
          <div>
            <FaCreditCardAlt style={inLineStyles.cardIcon} />
          </div>
        );
    }
  }

  render() {
    return (
      <Subscribe to={[userInfo, cartState, cost]}>
        {(state, cart, cost) => (
          <div className="zygoteStep3 zygoteStep">
            <div className="zygoteTable">
              {cart.apiErrors ? null : (
                <div>
                  <div className="zygoteRow">
                    <form action="" className="zygoteForm">
                      {yourPayment.sections.map((section, i) => {
                        return (
                          <div className="zygoteSection" key={i}>
                            <div className="zygoteSectionTitle">
                              {section.title}
                            </div>
                            {section.fields.map((field, i) => {
                              return this.renderField(
                                'update',
                                field,
                                i,
                                state
                              );
                            })}
                          </div>
                        );
                      })}
                    </form>
                    {this.state.checked &&
                    state.shipping.shippingAddress.length > 0 ? (
                      <div className="zygotePreviewAddress">
                        <div>{state.shipping.shippingFullName}</div>
                        <div>{state.shipping.shippingAddress}</div>
                        <div>
                          {state.shipping.shippingCity},{' '}
                          {state.shipping.shippingState}{' '}
                          {state.shipping.shippingZip}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {!this.state.checked ? (
                    <div className="zygoteRow">
                      <form action="" className="zygoteForm">
                        {yourPayment.additionalFields.sections.map(
                          (section, i) => {
                            return (
                              <div className="zygoteSection" key={i}>
                                <div className="zygoteSectionTitle">
                                  {section.title}
                                </div>
                                {section.fields.map((field, i) => {
                                  return this.renderField(
                                    'updateAddress',
                                    field,
                                    i,
                                    state
                                  );
                                })}
                              </div>
                            );
                          }
                        )}
                      </form>
                    </div>
                  ) : null}
                </div>
              )}

              <div className="zygoteRow">
                <ShippingOptions />
              </div>

              {cart.apiErrors ? null : (
                <div>
                  <div className="zygoteRow">
                    <Coupon />
                  </div>
                  <div className="zygoteRow">
                    <div className="zygoteFinalOrderTitle">
                      Final Order Summary
                    </div>
                    <OrderSummary />
                  </div>
                </div>
              )}
            </div>
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
