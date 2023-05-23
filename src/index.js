import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppRouter} from './pages/AppRouter'
import { HashRouter as Router } from 'react-router-dom';

import './styles/index.scss';

import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </Router>
  </React.StrictMode>
);