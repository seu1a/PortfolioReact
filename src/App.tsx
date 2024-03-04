import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

import Home from "./pages/Home";

import "./App.css";

import "./styles/profile/profile.css";

const store = configureStore({
  reducer: rootReducer,
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    );
  }
}

export default App;
