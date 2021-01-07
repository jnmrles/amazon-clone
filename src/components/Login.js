import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory } from 'react-router-dom'
import { auth } from './firebase.js'




function Login () {
  const history = useHistory();
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault()

   auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
 console.log('Logged IN')
 history.push('/')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });


}


const register = (e) =>
{
  e.preventDefault()
// firebase auth
  auth.createUserWithEmailAndPassword(email,password).then(
    (auth)=>{
      //if auth is returned, means account was successfully created
      console.log(auth)
      if(auth){
        history.push('/')
      }
    }
  )
  .catch((err)=>{alert(err.message)})
}






 // take password and email values and use firebase function to handle login
 // on firebase login you want to direct user back to home, if not handle error
 // use e.prevent default



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
          {/* onChange takes in a function that takes an event as a paramter you will need to access value with (event.target.value) */}
          <input  type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>

          <h5>Password</h5>
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

          <button className='login__signInButtom' type='submit' onClick={handleSubmit} > Sign in</button>

        </form>
        <p>
          By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. Please Review All Policies Listed on Our Site.
        </p>

        <button className="login__registerButton" onClick={register}> Create Your Amazon Account</button>

        </div>

    </div>

  )


}

export default Login
