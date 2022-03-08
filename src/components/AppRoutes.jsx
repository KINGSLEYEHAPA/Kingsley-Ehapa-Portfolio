import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";

const AppRoutes = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default AppRoutes;
