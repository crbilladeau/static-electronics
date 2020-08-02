import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <StyledHeader>
      <div className='bar'>
        <Logo>
          <Link href='/'>
            <a>
              static<span>Buy and sell premium used electronics</span>
            </a>
          </Link>
        </Logo>

        <Nav />
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <div>Cart</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  .bar {
    background: ${(props) => props.theme.blue};
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.black};
  }
`;

const Logo = styled.h1`
  font-family: 'Rowdies_Light', sans-serif;
  font-size: 6rem;
  font-weight: 300;
  margin: 0 0 0 2rem;
  padding: 0;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
  }
  span {
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    margin-left: 1.5rem;
    padding: 0;
    @media (max-width: 768px) {
      display: grid;
    }
  }
  @media (max-width: 1400px) {
    margin: 0;
    text-align: center;
    font-size: 4rem;
  }
`;

export default Header;
