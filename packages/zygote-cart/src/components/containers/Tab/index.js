import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cartState } from '../../state';
import { cartContent } from '../../utils';

export default class Tab extends Component {
  render() {
    const { tabs } = cartContent;
    const { tab } = this.props;
    const { title } = tab;
    return (
      <Subscribe to={cartState}>
        {state => (
          <div
            onClick={
              title === 'Confirm Order'
                ? null
                : () => cartState.setState({ tab: tabs.indexOf(tab) })
            }
            className={`zygoteTab ${tab.class} ${
              state.tab === tabs.indexOf(tab) ? 'zygoteActive' : ''
            }`}
          >
            {tab.icon}
            {title}
          </div>
        )}
      </Subscribe>
    );
  }
}
