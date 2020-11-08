import styled from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  /* Content and Background have 100vh */
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 1st option */
  justify-content: center;
  align-items: center;

  /* 2nd option (does the same as 1st option) */
  /* place-content: center; */

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    /* Forgot password */
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* only tags 'a' that are inside Content */
  /* Create account */
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  /* occupies all the space, minus 700px */
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
