import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js'
import Checkout from './components/Checkout.js'
import Login from './components/Login.js'



// refractor this later to conditionally render Header component

function App() {
return (
  <Router>
  <div className="app">


      <Switch>

      <Route path='/login'>
        <Login/>
      </Route>
      <Route path="/checkout">
      <Header/>

        <Checkout />
        </Route>

        <Route path="/">
        <Header/>
          <Home />
        </Route>


      </Switch>

  </div>
  </Router>
);
}
export default App;
