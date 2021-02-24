import { createGlobalStyle } from "styled-components";

export const device = {
  mobile: `(min-width: 375px)`,
  tablet: `(min-width: 767px)`,
  laptop: `(min-width: 970px)`,
  laptopL: `(min-width: 1170px)`,
  desktop: `(min-width: 2560px)`,
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: rgb(213, 91, 40);
    background: linear-gradient(
      90deg,
      rgba(213, 91, 40, 1) 0%,
      rgba(213, 109, 40, 1) 50%,
      rgba(213, 124, 40, 1) 100%
    );
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    border: none;
    padding: 0;
  }

  :root {
    --primary: #fbe474;
    --light-green: #40cd28;
  }
`;

export default GlobalStyle;
