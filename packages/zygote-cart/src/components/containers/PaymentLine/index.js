import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Icon_Visa,
  Icon_MasterCard,
  Icon_AmericanExpress,
  Icon_Discover
} from 'material-ui-credit-card-icons';
import MdLock from 'react-icons/lib/md/lock';

import styles from './styles';

const inLineStyles = {
  cardIcon: {
    height: '30px',
    width: '30px'
  },
  lockIcon: {
    height: '20px',
    width: '20px',
    transform: 'translateY(-50%)'
  }
};

export default class PaymentLine extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="zygotePaymentLine">
          <div className="zygotePaymentIcon">
            <MdLock style={inLineStyles.lockIcon} />
          </div>
          <div className="zygotePaymentIcon">
            <Icon_Visa style={inLineStyles.cardIcon} />
          </div>
          <div className="zygotePaymentIcon">
            <Icon_MasterCard style={inLineStyles.cardIcon} />
          </div>
          <div className="zygotePaymentIcon">
            <Icon_AmericanExpress style={inLineStyles.cardIcon} />
          </div>
          <div className="zygotePaymentIcon">
            <Icon_Discover style={inLineStyles.cardIcon} />
          </div>
          <style jsx>{styles}</style>
        </div>
      </MuiThemeProvider>
    );
  }
}
