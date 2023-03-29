import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    transition: linear .25s;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
  }

  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.6rem; }

  button {
    transition: linear .25s;
    display: inline-block;
    border-radius: .2em;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11em;
    cursor: pointer;
    border: thin solid;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    &:hover {
      color: ${(props) => props.theme.backgroundColor};
      background-color: ${(props) => props.theme.mainColor};
    }
    &:active {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
