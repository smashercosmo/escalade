import React, { Component } from 'react';
import styles from './styles';

export default class ItemHeader extends Component {
  render() {
    return (
      <div className="zygoteProdHeader">
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}
