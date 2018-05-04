import css from 'styled-jsx/css';

export default css`
  .zygoteOpen {
    overflow: hidden;
  }
  .zygoteContainer {
    z-index: 1000;
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  .zygoteContainer *,
  .zygoteContainer *:before,
  .zygoteContainer *:after {
    box-sizing: border-box;
  }
  .zygoteContainer select {
    padding: 0 10px;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    position: relative;
    background-image: linear-gradient(45deg, transparent 50%, #000 0),
      linear-gradient(135deg, #000 50%, transparent 0),
      linear-gradient(90deg, #ccc, #ccc);
    background-position: calc(100% - 17px) calc(1em + 2px),
      calc(100% - 12px) calc(1em + 2px), calc(100% - 2.1em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.4em;
    background-repeat: no-repeat;
  }
  .zygoteContainer a {
    text-decoration: none;
    color: #000;
  }
  .zygoteStep {
    padding: 20px 0;
  }
  .zygoteSection label {
    cursor: pointer;
    display: block;
    margin-bottom: 3px;
    color: #000;
    text-transform: uppercase;
    font-size: 0.8em;
  }
  .zygoteSection input,
  select {
    font-size: 1em;
    height: 40px;
    padding: 10px;
    border: solid 1px #ccc;
    margin-bottom: 20px;
    outline: none;
    width: 100%;
  }
  .zygoteSection input:focus {
    border: 1px solid #333;
  }
  .zygoteStep4 .zygoteProdDelete,
  .zygoteStep5 .zygoteProdDelete,
  .zygoteStep4 .zygoteDecrease,
  .zygoteStep5 .zygoteDecrease,
  .zygoteStep4 .zygoteIncrease,
  .zygoteStep5 .zygoteIncrease {
    display: none;
  }
  .zygoteStep4 .zygoteProdHeader div:last-of-type,
  .zygoteStep5 .zygoteProdHeader div:last-of-type {
    display: none;
  }
  .zygoteStep4 .zygoteProdHeader div:nth-of-type(3),
  .zygoteStep5 .zygoteProdHeader div:nth-of-type(3) {
    float: right;
    width: auto;
  }
  .zygoteCouponLine:after,
  .zygoteShipLine:after,
  .zygoteSubLine:after,
  .zygoteTaxLine:after,
  .zygoteTotalLine:after {
    content: '';
    display: block;
    clear: both;
  }
  .zygoteProdHeader:after,
  .zygoteStepBtns:after {
    content: '';
    display: block;
    clear: both;
  }
  .zygoteInputMsg {
    display: block;
    margin-bottom: 20px;
    margin-top: 3px;
    font-size: 0.9em;
    color: #f00;
  }
  .zygoteInputErr input,
  .zygoteInputErr input:focus,
  .zygoteInputErr select,
  .zygoteInputErr select:focus {
    border: 1px solid #f00;
    background-color: rgba(255, 0, 0, 0.1);
    margin-bottom: 0;
  }
  .zygoteMsgs > div {
    padding: 7px 10px;
    margin-bottom: 15px;
  }
  .zygoteErr {
    border: 1px solid #f00;
    background-color: rgba(255, 0, 0, 0.1);
  }
  @media (min-width: 900px) {
    .zygoteStep {
      padding: 0;
    }
    .zygoteTable {
      margin: 0 -20px;
    }
    .zygoteSection {
      width: calc(100% / 3);
      display: table-cell;
      padding: 20px;
      border-right: 1px solid #ccc;
      height: 100%;
    }
    .zygoteRow {
      height: auto;
      display: table;
      width: 100%;
    }
    .zygoteRow > div:last-of-type {
      border-right: 0;
    }
    .zygoteBillingToggle .zygoteRow .zygoteSection {
      display: table-cell;
      width: calc(100% / 2);
    }
  }
`;
