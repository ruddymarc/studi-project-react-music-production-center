import React from 'react';
import styled from 'styled-components';

export default function Header({ isLight, changeTheme }) {
  return (
    <Wrapper>
      <h1>Great Music Productio Center</h1>
      <button onClick={changeTheme}>
        Switch to { isLight ? 'dark' : 'light' } theme
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;