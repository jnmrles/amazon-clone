import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Header from './Header.js'
import Checkout from './Checkout.js'





function App() {
return (
  <Router>
  <div className="app">
  <Header/>

      <Switch>
      <Route path="/checkout">

        <Checkout />
        </Route>

        <Route path="/">
          <Home />
        </Route>


      </Switch>

  </div>
  </Router>
);
}
export default App;
