import React from 'react';
import ReactDOM from 'react-dom/client';
// import Router from './Router';
import Nav from './components/Nav/Nav';
import './styles/common.scss';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router /> */}
    <Nav />
  </React.StrictMode>
);
