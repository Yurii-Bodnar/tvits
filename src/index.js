import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'utility/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'utility/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/tweets">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
