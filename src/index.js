import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from "./features/user";
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

