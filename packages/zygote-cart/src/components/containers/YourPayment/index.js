import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { yourPayment } from '../../utils';
import { userInfo, cartState } from '../../state';
import { ShippingOptions } from '../../containers';
import styles from './styles';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
    this.renderField = this.renderField.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.update = this.update.bind(this);
  }

  handleCheck() {
    this.setState({ checked: !this.state.checked });
    userInfo.setState({ addressSame: !this.state.checked });
  }

  update(e) {
    e.preventDefault();
    const name = `billing${e.target.name.replace(/\s/g, '')}`;
    userInfo.setState({
      payment: { ...userInfo.state.payment, [name]: e.target.value }
    });
  }

  renderField(field, i) {
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
            className={`${field.class}Container zygoteToggleFieldWrapper`}
          >
            {this.state[field.name] ? (
              <div>
                <input
                  type="text"
                  className={field.class}
                  name={field.name}
                  onChange={this.update}
                  placeholder={`${field.label} ${field.span ? field.span : ''}`}
                />
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
          <div key={i} className={`${field.class}Container zygoteSelect`}>
            <select
              type="text"
              className={field.class}
              name={field.name}
              onChange={this.update}
            >
              <option value="">State</option>
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <style jsx>{styles}</style>
          </div>
        );
      default:
        return (
          <div key={i} className={`${field.class}Container`}>
            <input
              type="text"
              className={field.class}
              name={field.name}
              onChange={this.update}
              placeholder={`${field.label} ${field.span ? field.span : ''}`}
            />
            <style jsx>{styles}</style>
          </div>
        );
    }
  }

  render() {
    return (
      <Subscribe to={[userInfo, cartState]}>
        {(state, cart) => (
          <div className="zygoteStep3 zygoteStep">
            {cart.apiErrors ? (
              cart.apiErrors.find(err =>
                err.includes('Cannot add product to cart')
              ) ? (
                <div className="zygoteContactSupport zygoteMsgs">
                  <div className="zygoteErr">Contact Customer Support</div>
                </div>
              ) : null
            ) : null}
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
                              return this.renderField(field, i);
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
                                  return this.renderField(field, i);
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
