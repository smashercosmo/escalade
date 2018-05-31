import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { yourDetails } from '../../utils';
import { userInfo, cartState, cost } from '../../state';
import { OrderSummary } from '../../containers';
import styles from './styles';

export default class Shipping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      showSummary: false
    };
    this.update = this.update.bind(this);
    this.renderField = this.renderField.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(value) {
    userInfo.setState({ specialOffers: value });
  }

  update(e) {
    e.preventDefault();
    const name = `shipping${e.target.name.replace(/\s/g, '')}`;
    userInfo.setState({
      shipping: { ...userInfo.state.shipping, [name]: e.target.value }
    });
  }

  renderField(field, i) {
    switch (field.type) {
      case 'checkbox':
        return (
          <div
            key={i}
            className="zygoteCheckboxContainer"
            onClick={() => {
              this.setState({ checked: !this.state.checked });
              this.handleCheck(!this.state.checked);
            }}
          >
            <label htmlFor={field.class}>
              {`${field.label} ${this.props.brand}`}
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
              onChange={this.update}
              name={field.name}
              placeholder={`${field.label} ${field.span ? field.span : ''}`}
            />
            <style jsx>{styles}</style>
          </div>
        );
    }
  }

  render() {
    return (
      <Subscribe to={[userInfo, cartState, cost]}>
        {(state, cart, costState) => (
          <div className="zygoteStep2 zygoteStep">
            <div className="zygoteTable">
              <div className="zygoteRow">
                <div
                  className="zygoteOrderSummaryBanner"
                  style={this.state.showSummary ? { borderBottom: 'none' } : {}}
                  onClick={() =>
                    this.setState({
                      showSummary: !this.state.showSummary
                    })
                  }
                >
                  <div className="zygoteSummaryTitle">Order Summary</div>
                  {this.state.showSummary ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="30"
                      className="zygoteUpArrow"
                    >
                      <path d="M 35 30 L 40 30 L 22.5 0 L 17.5 0 L 0 30 L 5 30 L 20 5 35 30" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="30"
                      className="zygoteDownArrow"
                    >
                      <path d="M 35 0 L 40 0 L 22.5 30 L 17.5 30 L 0 0 L 5 0 L 20 25 35 0" />
                    </svg>
                  )}

                  <div className="zygoteTotalPreview">
                    ${costState.total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </div>
                </div>
                {this.state.showSummary ? (
                  <div className="zygoteOrderSummary">
                    <OrderSummary />
                  </div>
                ) : null}
              </div>
              <div className="zygoteRow">
                <form action="" className="zygoteForm">
                  {yourDetails.sections.map((section, i) => {
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
              </div>
            </div>
            <style jsx>{styles}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}

Shipping.defaultProps = {
  brand: 'brand.com'
};
