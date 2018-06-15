import css from 'styled-jsx/css'

export default css`
  .zygoteUserEmail {
    font-size: 0.8em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  .zygoteEmailConfirmation {
    font-weight: 300;
    font-size: 1.05em;
    margin: 30px 0 15px 0;
    text-align: center;
  }
  .zygoteOrderReview {
    margin: 0 -20px;
    background-color: #f8f8f8;
    padding: 20px 20px;
    border-top: 1px solid #e8e9e9;
  }
  .zygoteOrderReviewTitle {
    font-size: 1.2em;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .zygoteOrderSpecs {
    margin-bottom: 20px;
    & p {
      margin: 0;
      font-size: 0.8em;
      font-weight: 300;
    }
  }
  .zygoteDetailsInfo {
    font-size: 0.8em;
    font-weight: 300;
    & p {
      margin: 0;
    }
    & > div {
      display: inline-block;
      width: 50%;
    }
  }
  .zygoteStep4 .zygoteOrderSummaryContainer {
    margin-top: 0px;
    border-top: none;
  }
`
