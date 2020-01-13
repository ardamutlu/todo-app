import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../Header';
import { loadAppProcess } from '../../actions/pages';
import { ThemeProvider } from '../../theme';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100% !important;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    height: 100% !important;
  }
  #root {
    height: 100% !important;
  }

  .btn-primary {
    opacity: 0.9;
    background-color: #331BC1;
    border-color: #331BC1;
    &:hover {
      opacity: 1;
      background-color: #331BC1;
      border-color: #331BC1;
    }
  }

  .dropdown-item.active, .dropdown-item:active {
    background-color: #331BC1;
  }

  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    opacity: 0.9;
    background-color: #331BC1;
    border-color: #331BC1;
  }

  .round {
    position: relative;
  }

  .transparent-modal {
    margin: auto;
    .modal-content {
      background-color: transparent !important;
      border: none !important;
      width: 275px !important;
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      opacity: 1;
      background-color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
  }

  .w-275 {
    width: 275px !important;
  }

  .round label {
    background-color: #fff;
    border: 3px solid #331CBF;
    border-radius: 50%;
    cursor: pointer;
    height: 24px;
    left: 0;
    position: absolute;
    top: 0;
    width: 24px;
    background-color: #331CBF;
    border-color: #331CBF;
    opacity: .3;
    transition: .3s
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 3px;
    opacity: .5;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 12px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #331CBF;
    border-color: #331CBF;
    opacity: 1;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ theme }: any) => (theme.isMobile ? 'column' : 'row')};
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// like App-Shell of PWA
export const App: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  if (!process.env.IS_BROWSER) {
    dispatch(loadAppProcess());
  } else {
    useEffect(() => {
      dispatch(loadAppProcess());
    }, []);
  }

  return (
    <ThemeProvider>
      <Container>
        <Header />
        <GlobalStyle />
        <Main>{children}</Main>
      </Container>
    </ThemeProvider>
  );
};
