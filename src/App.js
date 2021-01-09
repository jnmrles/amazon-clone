import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js'
import Checkout from './components/Checkout.js'
import Login from './components/Login.js'
import {auth} from './components/firebase.js'
import { useStateValue } from "./store/StateProvider.js"
import Payment from "./components/Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_teWRja4PyjtX2iWI4KrEqw6x');


// refractor this later to conditionally render Header component

function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(()=>{

    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch({

          type:'SET_USER',
          user: user


        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user: null
        })

      }
    });
  }, [])



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
      <Route path="/payment">
        <Header/>

       {/* Must wrap Payment Component with Stripe Elements */}
       <Elements stripe={promise}>
         <Payment/>
       </Elements>
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
