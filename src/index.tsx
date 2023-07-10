import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';


const client = new ApolloClient({
  uri: 'https://localhost:5001/graphql/',  // replace with your GraphQL server URI
  cache: new InMemoryCache()
});

const root = document.getElementById('root');

if (root !== null) {
  const appRoot = ReactDOM.createRoot(root);
  appRoot.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
}
