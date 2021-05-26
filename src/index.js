import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'

import './styles/index.css';

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);


