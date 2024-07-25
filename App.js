// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import Home from './screen';

export default function App() {
  return (
    <Provider store={store}>
        {/* <HomeS /> */}
        <Home />
    </Provider>
  );
}
