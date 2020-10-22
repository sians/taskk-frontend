import React from 'react';
import { ThemeProvider } from "styled-components";
import { ModalProvider } from 'styled-react-modal'

import theme from "./theme";
import { Background } from "./components/Modal/style";

import AppRouter from "./router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider backgroundComponent={Background}>
        <div className="App">
          <AppRouter />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
