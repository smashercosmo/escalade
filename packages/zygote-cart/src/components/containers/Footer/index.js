import React, { Component } from 'react';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <div className="zygoteFooter">
        <span>{this.props.footerMessage}</span>
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}

Footer.defaultProps = {
  footerMessage: 'This is a custom footer message'
};
