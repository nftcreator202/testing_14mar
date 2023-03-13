import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme/theme'
import { Web3Provider } from "./Context/Web3Context";


ReactDOM.render(
<ThemeProvider theme={theme}>
<Web3Provider>
<App />
</Web3Provider>
</ThemeProvider>,
  document.getElementById('root')
);


