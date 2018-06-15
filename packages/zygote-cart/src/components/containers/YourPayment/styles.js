import css from 'styled-jsx/css'

export default css`
  .zygotePreviewAddress {
    color: #000;
    font-size: 0.8em;
    font-weight: 600;
    margin-top: -40px;
    margin-left: 28px;
  }
  .zygoteFinalOrderTitle {
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 200;
    margin-top: 15px;
  }
  .zygoteStep3 {
    margin: 30px 0 20px 0;
  }
  .zygoteAnim {
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.5s linear;
  }
  .zygoteStep3 .zygoteOrderSummaryContainer {
    margin: 10px auto;
    background-color: #fff;
    border: none;
  }
  .zygoteAnimAction {
    transform: scaleY(1);
  }
  .zygoteBillingNumberContainer {
    position: relative;
  }
  .zygoteCardPreview {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .zygotePaymentLineWrapper {
    float: right;
    margin-top: -10px;
    transform: translateY(20%);
  }
  .zygoteBillingExpirationContainer {
    width: 47.5%;
    margin-right: 5%;
    float: left;
  }
  .zygoteBillingSecurityContainer {
    width: 47.5%;
    float: right;
  }
  .zygoteCheckboxContainer {
    clear: both;
  }
`
