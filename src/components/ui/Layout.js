import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{ children }</Main>
      <Footer />
    </Wrapper>
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