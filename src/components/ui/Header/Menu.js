import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
  return (
    <Wrapper>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  column-gap: .8rem;
  display: inline-flex;
  a {
    text-decoration: none;
    padding-bottom: 2px;
    color: inherit;
    &.active,
    &:hover {
      border-bottom: thick solid;
    }
  }
`;
