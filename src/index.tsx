import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import { ApolloProvider } from "@apollo/client/react"
import {client} from './apollo';

ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
  <ApolloProvider client={client}>
    <App />
 </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

