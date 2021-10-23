import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from "./app/store";
import CustomSnackbar from './components/Alerts/CustomSnackbar';
import "./styles/Main.scss";
// import { AxiosRequestConfig } from "axios";
// import api from "./apis/snorflaxManagerAPI";


// api.interceptors.request.use((request: AxiosRequestConfig) => {
//   if (request.url?.includes("users")) {
//     request.headers["x-access-token"] = store?.getState()?.loginUser?.user?.accessToken!;
//   }
//   return request;
// }, (error) => {
//   return Promise.reject(error);
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <CustomSnackbar />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);