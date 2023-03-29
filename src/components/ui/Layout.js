import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import Footer from './Footer';
import Header from './Header';
import GlobalStyle from './GlobalStyle';

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(true)
  const toggleTheme = () => { setIsLight(!isLight) }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header isLight={isLight} changeTheme={toggleTheme} />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  gap: 1rem;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Main = styled.div`
  flex: 1;
  width: 90%;
  max-width: 1024px;
  margin: auto;
  padding: .8rem;
  border: thin solid;
`;