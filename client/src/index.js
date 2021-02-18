import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import AppContainer from './AppContainer';
import Store from 'context/Store';
import './index.css';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? '/graphql'
      : 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Store>
      <AppContainer />
    </Store>
  </ApolloProvider>,
  document.getElementById('root')
);
