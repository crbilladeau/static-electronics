import styled from 'styled-components';

const PaginationStyles = styled.div`
  background-color: white;
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 10px 30px;
    border-right: 1px solid ${(props) => props.theme.blue};
    &:last-child {
      border-right: 0;
    }
  }
  p,
  a {
    font-weight: 500;
    color: ${(props) => props.theme.blue};
  }
  a {
    font-size: 3rem;
    padding: 0 1rem;
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
