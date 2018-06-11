import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cartState, userInfo } from '../../state';
import { cartContent } from '../../utils';
import styles from './styles';

export default class Tab extends Component {
  render() {
    const { tabs } = cartContent;
    const { tab } = this.props;
    const { title } = tab;
    return (
      <Subscribe to={cartState}>
        {state => (
          <div
            onClick={() => {
              let areErrors = false;
              const { shipping } = userInfo.state;
              let errors = null;
              Object.keys(shipping).forEach(k => {
                if (k === 'shippingApt' || k === 'shippingCompanyName') {
                  return;
                }
                if (shipping[k].length === 0) {
                  areErrors = true;
                  errors
                    ? (errors = {
                        ...errors,
                        [k]: k => `Please enter a valid ${k}.`
                      })
                    : (errors = { [k]: k => `Please enter a valid ${k}.` });
                }
              });
              cartState.setState({
                errors: errors,
                tab:
                  state.tab === 1
                    ? cartState.state.apiErrors ||
                      cartState.state.errors ||
                      areErrors
                      ? state.tab
                      : tab.active
                    : tab.active
              });
            }}
            className={`zygoteTab ${tab.class} ${
              state.tab === tab.active ? 'zygoteActive' : ''
            }`}
          >
            {title}
            <style jsx>{styles}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
