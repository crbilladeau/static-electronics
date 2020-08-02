import styled from 'styled-components';

const ItemTitle = styled.h3`
  font-family: 'Rowdies_Light', sans-serif;
  font-weight: 300;
  margin: 0 1rem;
  text-align: center;
  transform: skew(-7deg);
  margin: 1.5rem 0 0 0;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  a {
    background: none;
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: ${(props) => props.theme.black};
    padding: 0 1rem;
  }
`;

export default ItemTitle;
