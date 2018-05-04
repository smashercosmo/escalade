import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { Tab } from '../../containers';
import { cartState } from '../../state';
import { cartContent } from '../../utils';
import styles from './styles';

export default class Nav extends Component {
  render() {
    const { tabs } = cartContent;
    return (
      <Subscribe to={cartState}>
        {state => (
          <div className="zygoteTabs">
            {tabs.map((tab, i) => {
              return <Tab key={i} tab={tab} />;
            })}
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
