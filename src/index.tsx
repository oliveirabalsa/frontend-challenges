import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3001',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
