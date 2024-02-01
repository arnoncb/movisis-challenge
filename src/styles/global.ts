import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #e22222;
    --black: #1e1e1e;
    --gray: #747474;
    --light-gray: #aaa;
    --white: #fff;
    --pale: #ffffffb3;
    font-size: 62.5%;
  }
  
  body {
    background: #fff;
    font-size: 1.4rem;
    color: var(--black);
    font-family: Inter, sans-serif;
  }

  a {
    text-decoration: none;
  }
`
