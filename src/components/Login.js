import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'




function Login () {

  return (
    //BEM CONVENTION
    <div className='login'>
      <Link to='/'>
      <img  className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>

      <div className="login__container">
        <h1> Sign In</h1>
        <form>
          <h5>Email</h5>
          <input  type='text'></input>

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButtom' > Sign in</button>

        </form>
        <p>
          By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. Please Review All Policies Listed on Our Site.
        </p>

        <button className="login__registerButton"> Create Your Amazon Account</button>

        </div>

    </div>

  )


}

export default Login
