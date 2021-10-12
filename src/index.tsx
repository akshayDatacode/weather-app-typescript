import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </>,
  document.querySelector('#root'),
);
