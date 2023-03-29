import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import Footer from './Footer';
import Header from './Header';
import GlobalStyle from './GlobalStyle';

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(true)
  const toggleTheme = () => { setIsLight(!isLight) }
  const changTheme = (
    <button onClick={toggleTheme}>
      Switch to { isLight ? 'dark' : 'light' } theme
    </button>
  )
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header action={changTheme} />
        <Main>
          { children }
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