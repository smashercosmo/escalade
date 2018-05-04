import css from 'styled-jsx/css';

export default css`
  .zygoteModal {
    background-color: #fff;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }
  @media (min-width: 900px) {
    .zygoteModal {
      top: 30px;
      margin-bottom: 30px;
    }
  }
`;
