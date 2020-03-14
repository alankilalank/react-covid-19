import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ThemeProvider from './contexts/themeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
