import css from 'styled-jsx/css';

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
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    & > div {
      transform: translateY(calc(50%));
    }
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
`;
