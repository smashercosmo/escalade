import css from 'styled-jsx/css'

export default css`
  .zygotePreviewAddress {
    color: #000;
    font-size: 0.8em;
    font-weight: 600;
    margin-top: -40px;
    margin-left: 28px;
  }
  .zygotePreviewAddressBottom {
    color: #000;
    font-size: 0.8em;
    font-weight: 600;
    margin: 0px 10px 40px 28px;
    & h3 {
      margin-bottom: 5px;
    }
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
    transform: translateY(-100%);
    transform-origin: top;
    transition: all 0.25s linear;
  }
  .zygoteAnimAction {
    transform: translateY(-10%);
  }
  .zygoteBillingInfo {
    padding: 20px 20px 0px 20px;
    margin: -20px -20px 0px -20px;
    overflow-y: hidden;
    position: absolute;
    left: 20px;
    right: 20px;
  }
  .zygoteStep3 .zygoteOrderSummaryContainer {
    margin: 10px auto;
    background-color: #fff;
    border: none;
  }

  .zygoteBillingNumberContainer {
    position: relative;
  }
  .zygoteCardPreview {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .zygoteSectionTitle > span {
    float: left;
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
  .zygoteRowAnim {
    margin-top: 50px;
    transform: translateY(0%);
    transition: all 0.25s ease;
  }
  .zygoteRowAnimAction {
    transform: translateY(55%);
    margin-bottom: 95%;
  }
`
