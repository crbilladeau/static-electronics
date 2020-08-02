import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Header from './Header';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;

const theme = {
  blue: '#2DC7FF',
  offBlack: '#393939',
  black: '#0F0F0F',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#F0F0F0',
  maxWidth: '100vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: ${(props) => props.theme.offWhite};
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
   @font-face {
    font-family: 'Montserrat';
    src: url('/static/Montserrat/Montserrat-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('/static/Montserrat/Montserrat-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }   
  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('/static/Montserrat/Montserrat-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }    
  @font-face {
    font-family: 'Rowdies_Light';
    src: url('/static/Rowdies/Rowdies-Light.woff2') format('woff2');
    font-weight: light;
    font-style: normal;
  } 

  html {
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${theme.offWhite};
    color: ${theme.black};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
  }
  a, p {
    text-decoration: none;
    color: ${theme.black}
  }
`;
