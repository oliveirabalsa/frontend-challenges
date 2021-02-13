import React from "react";
import Content from '../components/layout/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../index'
import "./App.css";

const App: React.FC = (props) => (
  <ApolloProvider client={client}>
     <Router>
      <Content />
    </Router>
  </ApolloProvider>
   
);

export default App;
