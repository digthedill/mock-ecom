import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";

import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
