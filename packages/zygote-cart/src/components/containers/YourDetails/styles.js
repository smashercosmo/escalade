import css from 'styled-jsx/css'

export default css`
  .zygoteOrderSummaryBanner {
    width: auto;
    background-color: #f8f8f8;
    cursor: pointer;
    border-top: 1px solid #e8e9e9;
    border-bottom: 1px solid #e8e9e9;
    margin: 20px -20px;
    padding: 8px 10px 8px 25px;
    font-size: 0.8em;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    & > div {
      transform: translateY(calc(50%));
    }
  }
  .zygoteOrderSummary {
    padding: 20px 20px 0px 20px;
    margin: -20px -20px 0px -20px;
    overflow-y: hidden;
    position: absolute;
    left: 20px;
    right: 20px;
  }
  .zygoteTotalPreview {
    float: right;
  }
  .zygoteSummaryTitle {
    float: left;
  }
  .zygoteDownArrow,
  .zygoteUpArrow {
    float: right;
  }
  .zygoteStep2 {
    margin-bottom: 50px;
  }
  .zygoteRowAnim {
    margin-top: 50px;
    transform: translateY(0%);
    transition: all 0.25s ease;
  }
  .zygoteRowAnimAction {
    transform: translateY(55%);
    margin-bottom: 77%;
  }
  .zygoteShippingCity::placeholder,
  .zygoteShippingStateContainer select,
  .zygoteShippingZip::placeholder,
  .zygoteShippingCompanyName::placeholder,
  .zygoteShippingApt::placeholder {
    color: #b7b7b7;
    font-style: oblique;
  }
  .zygoteInputErr input,
  .zygoteInputErr input:focus,
  .zygoteInputErr select,
  .zygoteInputErr select:focus {
    border: 1px solid #f00;
    background-color: rgba(255, 0, 0, 0.1);
    color: #f00;
    margin-bottom: 0;
  }
  .zygoteInputErr input ::placeholder,
  .zygoteInputErr select ::placeholder {
    color: #f00;
  }
`
