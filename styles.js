import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: white;
    margin: 0;
    font-family: system-ui;
    background: linear-gradient(to right, #444, #333);
  
  }
`;
