import css from 'styled-jsx/css';

export default css`
  .zygoteProdDelete {
    float: right;
    cursor: pointer;
    line-height: 14px;
    font-size: 1.5em;
    text-align: right;
    position: absolute;
    top: 0;
    right: 0;
  }
  .zygoteDecrease,
  .zygoteIncrease {
    text-align: center;
    cursor: pointer;
    background: black;
    color: white;
    width: 19px;
    height: 19px;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 17px;
    border-radius: 100%;
    display: inline-block;
  }
  .zygoteProdList {
    width: 100%;
    margin-top: 50px;
  }
  .zygoteProd {
    margin: 15px auto;
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
  }
  .zygoteProd:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
  }
  .zygoteStep4 .zygoteProdPrice,
  .zygoteStep5 .zygoteProdPrice {
    float: right;
    text-align: right;
  }
  .zygoteProd:after,
  .zygoteProd:before {
    content: '';
    display: block;
    clear: both;
  }
  .zygoteProdImg {
    display: none;
  }
  .zygoteProdImg img {
    width: 150px;
    border: 0;
    padding: 0 5px;
  }
  .zygoteProdQty {
    float: left;
  }
  .zygoteProdName {
    margin-bottom: 15px;
    text-decoration: none;
  }
  .zygoteProdPrice {
    text-align: right;
    font-weight: 700;
  }
  .zygoteProdImg a {
    display: block;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }
  @media (min-width: 900px) {
    .zygoteStep4 .zygoteProdPrice,
    .zygoteStep5 .zygoteProdPrice {
      width: 237px;
      float: none;
    }
    .zygoteProd {
      margin-bottom: 15px;
      padding-bottom: 15px;
      display: table-row;
    }
    .zygoteProdDelete {
      float: none;
      position: static;
      top: auto;
      right: auto;
    }
    .zygoteProdQty {
      float: none;
    }
    .zygoteProdImg a {
      position: relative;
    }
    .zygoteProdImg img {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .zygoteProdName,
    .zygoteProdImg,
    .zygoteProdDelete,
    .zygoteProdPrice,
    .zygoteProdQty {
      display: table-cell;
      vertical-align: middle;
      padding: 0;
      margin: 0;
    }
    .zygoteProdName {
      width: 393px;
      margin-bottom: 0;
    }
    .zygoteProdName a {
      font-weight: 700;
      text-transform: uppercase;
    }
    .zygoteProdName > div {
      padding: 0 20px;
    }
    .zygoteProdName > div > div {
      margin-top: 5px;
      font-size: 0.9em;
      overflow: hidden;
    }
    .zygoteProdPrice,
    .zygoteProdQty {
      width: 120px;
      text-align: center;
    }
    .zygoteProdPrice > div,
    .zygoteProdQty > div {
      width: 100%;
    }
    .zygoteProdDelete {
      width: 8%;
    }
    .zygoteProdDelete > div {
      text-align: right;
      width: 100%;
    }
  }
`;
