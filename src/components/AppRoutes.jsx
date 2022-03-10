import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import Homepage from "./Homepage";

const AppRoutes = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default AppRoutes;
