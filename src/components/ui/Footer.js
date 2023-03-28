import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      This app is made with 💕 by
        <a href="https://github.com/ruddymarc/studi-react-up-project-mpc.git">
          Ruddy
        </a>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;