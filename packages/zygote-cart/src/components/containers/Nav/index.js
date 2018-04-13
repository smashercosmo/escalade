import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { Tab } from '../../containers';
import { cartState } from '../../state';
import { cartContent } from '../../utils';

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
            <style jsx global>{`
              .zygoteTabs {
                width: 100%;
                display: none;
                text-align: center;
                text-transform: uppercase;
                color: #666;
                font-size: 0.8em;
              }
              .zygoteTabs path {
                fill: #666;
              }
              .zygoteTabs .zygoteActive {
                background-color: #fff;
                color: #000;
                cursor: default;
                border-bottom: 0;
              }
              .zygoteTabs .zygoteActive path {
                fill: #000;
              }
              .zygoteTabs div {
                background-color: #ccc;
                width: 25%;
                float: left;
                padding: 20px 0;
                border-bottom: 1px solid #bbb;
                border-right: 1px solid #bbb;
                height: 63px;
                cursor: pointer;
              }
              .zygoteTabs div:last-of-type {
                border: 0;
              }
              div.zygoteConfirmTab {
                cursor: default;
              }
              .zygoteTabs svg {
                width: 17px;
                height: 17px;
                margin-right: 5px;
                position: relative;
              }
              .zygoteCartTab svg {
                top: 2px;
              }
              .zygoteShipTab svg {
                width: 20px;
                height: 20px;
                top: 4px;
              }
              .zygotePayTab svg {
                top: 3px;
                width: 18px;
                height: 18px;
              }
              .zygoteConfirmTab svg {
                width: 15px;
                height: 15px;
                top: 1px;
              }
              .zygoteTabs:after {
                content: '';
                display: block;
                clear: both;
              }
              @media (min-width: 900px) {
                .zygoteTabs {
                  display: block;
                }
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
