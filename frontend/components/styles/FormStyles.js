import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  background: white;
  height: 100%;
  box-shadow: 20px 20px 42px #b8b8b8, -20px -20px 42px #ffffff;
  padding: 4rem;
`;

const FormStyles = styled.form`
  background: ${(props) => props.theme.white};
  padding: 20px;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 1000px;
  label {
    font-family: 'Montserrat-SemiBold', sans-serif;
  }
  input,
  textarea,
  select {
    color: ${(props) => props.theme.black};
    width: 100%;
    padding: 2rem 0 1rem 0;
    font-family: 'Montserrat-Medium', sans-serif;
    font-size: 1.8rem;
    border: none;
    border-bottom: 2px solid lightgrey;
    margin: 1rem 0;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.blue};
    }
  }

  input[type='file'] {
    border-bottom: none;
  }

  button,
  input[type='submit'] {
    color: white;
    width: auto;
    background: #2dc7ff;
    border: 0;
    font-size: 2.5rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    margin: 2rem 0 0 0;
    transform: skew(-5deg) rotate(-1deg);
    box-shadow: ${(props) => props.theme.bs};
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #77d6f8 0%,
        #2dffce 50%,
        #2dc7ff 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default FormStyles;
