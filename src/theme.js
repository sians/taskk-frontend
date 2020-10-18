import { createGlobalStyle } from "styled-components";

export default {
    margin: 16
}

export const GlobalStyles = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }
    body {
      margin: 0px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;