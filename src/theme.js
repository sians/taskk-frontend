import { createGlobalStyle } from "styled-components";

export default {
    margin: 16,
    colors: {
      backdrop: 'rgba(60,60,60,.75)',
      // modal: {
      //   darkGrey: 'rgba(41, 39, 53, 0.80)',
      //   offwhite: '#989898'
      // }
      modal: {
        darkGrey: 'rgba(41, 39, 53, 0.80)',
        offwhite: '#989898'
      }
      

    }
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
      font-family: 'Roboto Mono', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;

const textShadow = `
  text-shadow: 3px 2px 8px black, -2px -2px 4px #878196;
`;