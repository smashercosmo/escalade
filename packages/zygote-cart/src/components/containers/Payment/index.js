import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { payment } from '../../utils';
import { userInfo, cartState } from '../../state';

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();

    userInfo.setState({
      payment: { ...userInfo.state.payment, [e.target.name]: e.target.value }
    });
  }

  updatePaymentAddress(e) {
    e.preventDefault();

    userInfo.setState({
      paymentAddress: {
        ...userInfo.state.paymentAddress,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    return (
      <Subscribe to={[userInfo, cartState]}>
        {(state, cart) => (
          <div className="zygoteStep3 zygoteStep">
            <div className="zygoteTable">
              <div className="zygoteRow">
                {payment.fields.map((section, i) => (
                  <div key={i} className="zygoteSection">
                    {section.map(
                      (item, i) =>
                        item.type ? (
                          item.type === 'select' ? (
                            <div
                              key={i}
                              className={`${
                                cart.errors
                                  ? cart.errors[item.class.slice(6)]
                                    ? 'zygoteInputErr'
                                    : ''
                                  : ''
                              } ${item.class}`}
                            >
                              <label htmlFor={item.class}>{item.label}</label>
                              <select
                                type="text"
                                id={item.class}
                                name={item.class.slice(6)}
                                onChange={this.update}
                                value={state.payment[item.class.slice(6)]}
                              >
                                <option disabled value="" />
                                {item.options.map((option, i) => (
                                  <option key={i} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              {cart.errors ? (
                                cart.errors[item.class.slice(6)] ? (
                                  <div className="zygoteInputMsg">
                                    {cart.errors[item.class.slice(6)](
                                      item.name
                                    )}
                                  </div>
                                ) : null
                              ) : null}
                            </div>
                          ) : null
                        ) : (
                          <div
                            key={i}
                            className={`${
                              cart.errors
                                ? cart.errors[item.class.slice(6)]
                                  ? 'zygoteInputErr'
                                  : ''
                                : ''
                            } ${item.class}`}
                          >
                            <label htmlFor={item.class}>{item.label}</label>
                            <input
                              type="text"
                              id={item.class}
                              onChange={this.update}
                              name={item.class.slice(6)}
                              value={state.payment[item.class.slice(6)]}
                            />
                            {cart.errors ? (
                              cart.errors[item.class.slice(6)] ? (
                                <div className="zygoteInputMsg">
                                  {cart.errors[item.class.slice(6)](item.name)}
                                </div>
                              ) : null
                            ) : null}
                          </div>
                        )
                    )}
                  </div>
                ))}
                <div className="zygoteSection">
                  <div className="zygoteBoxLabel">
                    <input
                      type="checkbox"
                      checked={state.addressSame}
                      onChange={() =>
                        userInfo.setState({ addressSame: !state.addressSame })
                      }
                      name="billingSame"
                    />
                    <span
                      onClick={() =>
                        userInfo.setState({ addressSame: !state.addressSame })
                      }
                    >
                      Billing Address Same as Shipping
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {!state.addressSame && (
              <div className="zygoteTable zygoteBillingToggle">
                <div className="zygoteRow">
                  {payment.additionalFields.map((section, i) => (
                    <div key={i} className="zygoteSection">
                      {section.map(
                        (item, i) =>
                          item.type ? (
                            item.type === 'select' ? (
                              <div
                                key={i}
                                className={`${
                                  cart.errors
                                    ? cart.errors[item.class.slice(6)]
                                      ? 'zygoteInputErr'
                                      : ''
                                    : ''
                                } ${item.class}`}
                              >
                                <label htmlFor={item.class}>{item.label}</label>
                                <select
                                  type="text"
                                  id={item.class}
                                  name={item.class.slice(6)}
                                  value={
                                    state.paymentAddress[item.class.slice(6)]
                                  }
                                  onChange={this.updatePaymentAddress}
                                >
                                  <option disabled value="" />
                                  <option value="AL">Alabama</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                </select>
                                {cart.errors ? (
                                  cart.errors[item.class.slice(6)] ? (
                                    <div className="zygoteInputMsg">
                                      {cart.errors[item.class.slice(6)](
                                        item.name
                                      )}
                                    </div>
                                  ) : null
                                ) : null}
                              </div>
                            ) : null
                          ) : (
                            <div
                              className={`${
                                cart.errors
                                  ? cart.errors[item.class.slice(6)]
                                    ? 'zygoteInputErr'
                                    : ''
                                  : ''
                              } ${item.class}`}
                              key={i}
                            >
                              <label htmlFor={item.class}>{item.label}</label>
                              <input
                                type="text"
                                id={item.class}
                                name={item.class.slice(6)}
                                onChange={this.updatePaymentAddress}
                                value={
                                  state.paymentAddress[item.class.slice(6)]
                                }
                              />
                              {cart.errors ? (
                                cart.errors[item.class.slice(6)] ? (
                                  <div className="zygoteInputMsg">
                                    {cart.errors[item.class.slice(6)](
                                      item.name
                                    )}
                                  </div>
                                ) : null
                              ) : null}
                            </div>
                          )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <style jsx global>{`
              .zygoteBoxLabel input {
                display: inline-block;
                width: auto !important;
                height: auto !important;
              }
              .zygoteBoxLabel span {
                font-size: 0.9em;
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
