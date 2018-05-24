import css from 'styled-jsx/css';

export default css`
  .zygoteProd {
    margin: 10px auto;
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 30px;
    color: #999;
    font-size: 0.9em;
  }
  .zygoteProdDelete {
    cursor: pointer;
    line-height: 14px;
    width: 8%;
    font-size: 1.9em;
    font-weight: 300;
    text-align: right;
    position: absolute;
    top: -5px;
    right: 0;
  }
  .zygoteDecrease,
  .zygoteIncrease {
    text-align: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
    font-weight: 300;
    font-size: 1.7em;
    line-height: 0.7em;
    display: inline-block;
  }
  .zygoteDecrease {
    margin-right: 8px;
  }
  .zygoteIncrease {
    margin-left: 8px;
  }
  .zygoteProdList {
    width: 100%;
  }
  .zygoteProdNameTitle {
    color: #333;
  }
  .zygoteProd > div {
    float: left;
  }
  .zygoteProd:after {
    content: '';
    clear: both;
    display: block;
  }
  .zygoteProdImg img {
    width: 75px;
    border: 0;
  }
  .zygoteProdImg {
    text-align: center;
    width: 20%;
    min-width: 75px;
  }
  .zygoteProdName {
    width: 32%;
    min-width: 125px;
  }

  .zygoteProdQty {
    width: 20%;
    min-width: 30px;
    text-align: center;
  }
  .zygoteProdPrice {
    width: 20%;
    text-align: right;
    min-width: 30px;
  }
`;
