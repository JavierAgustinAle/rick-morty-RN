import React from 'react';
// Components
import Navigation from './Navigation/Navigation';
// Redux
import { Provider } from 'react-redux';
import generateStore from './Redux/Store/Store';
// Apollo
import { client } from './Redux/ApolloClient';
import { ApolloProvider } from 'react-apollo';

let store = generateStore();


export default function App() {
  return (

    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApolloProvider>
  );
}


