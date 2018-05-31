import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cost } from '../../state';
import styles from './styles';

export default class Tax extends Component {
  render() {
    return (
      <Subscribe to={cost}>
        {state => (
          <div className="zygoteTaxLine">
            <div className="zygoteTaxHead">Estimated Tax</div>
            <div className="zygoteTax">
              ${state.tax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
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
