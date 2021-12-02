import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CursorProvider from './components/CursorProvider/CursorProvider';

ReactDOM.render(
  <React.StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);