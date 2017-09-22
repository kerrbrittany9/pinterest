import React from "react";
import ReactDOM from "react-dom";
import App from  "./components/App";
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import reducer from  './reducers/pin-list-reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('react-app-root')
);
