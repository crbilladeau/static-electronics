import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    color: white;
    font-size: 2rem;
    font-weight: 300;
    background: none;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${(props) => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: white;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 4rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 768px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1400px) {
    border-top: 1px solid ${(props) => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
