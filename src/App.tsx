import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

export default App;
