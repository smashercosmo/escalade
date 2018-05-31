import css from 'styled-jsx/css';

export default css`
  .zygoteClose {
    color: #000;
    font-size: 3em;
    font-weight: 200;
    position: absolute;
    top: -10px;
    right: 20px;
    cursor: pointer;
  }
  .zygoteHeader {
    text-align: center;
    padding: 20px 20px 0px 20px;
    position: relative;
  }
  .zygoteBrandLogo > img {
    margin: 0;
    padding: 0;
    width: 200px;
  }
  .zygoteBrandLogo {
    padding-bottom: 15px;
  }
  .zygoteDefaultBrandLogo {
    background: #ccc;
    padding: 5px 0;
    text-transform: uppercase;
    width: 120px;
    margin: 0 auto;
    font-weight: 300;
    color: #191919;
  }
  .zygoteAddedToCart {
    font-size: 1.2em;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 0.8em;
  }
  .zygoteCartHeader {
    margin-bottom: 20px;
  }
`;
