import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${(props) => props.theme.blue};
  transform: rotate(3deg);
  color: white;
  font-family: 'Rowdies_Light', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  padding: 5px;
  line-height: 1;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
