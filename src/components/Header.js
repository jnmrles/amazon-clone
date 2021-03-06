import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from '../store/StateProvider.js'
import { auth } from './firebase.js'


// Header Component for Nav and Search Bar

function Header () {
  // state provider allows to access state from
  const [{basket, user}, dispatch] = useStateValue()

  const signOut = (e) => {
   if(user){
    auth.signOut()
   }

  }

  return (
    <div className='header'>
      <Link to='/'>

     <img className="header__logo" src='https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png' alt=''/>
      </Link>


     <div className='header__search'>
       <input className="header__searchInput" type='text'>
       </input>
       <SearchIcon className="header__searchIcon"/>
     </div>

     <div className='header__nav'>
       {!user? <Link to={"/login"} >
       <div onClick={signOut} className='header__option'>
         <span className='header__optionLineOne'>

           Hello Guest
         </span>
         <span className='header__optionLineTwo'>
         {user === null?"Sign In":"Sign Out"}
        </span>
       </div>
       </Link>: <Link to={"/"} >
       <div onClick={signOut} className='header__option'>
         <span className='header__optionLineOne'>
{`Hello, ${user.email}`}
         </span>
         <span className='header__optionLineTwo'>
         {user === null?"Sign In":"Sign Out"}
        </span>
       </div>
       </Link>}


       <div className='header__option'>
       <span className='header__optionLineOne'>
          Returns
         </span>
         <span className='header__optionLineTwo'>
          & Orders
        </span>
       </div>

       <div className='header__option'>
       <span className='header__optionLineOne'>
          Your
         </span>
         <span className='header__optionLineTwo'>
        Prime
        </span>
       </div>

       <Link to='/checkout'>
       <div className="header_optionBasket">
       <ShoppingBasketIcon />

       <span className='header__optionLineTwo header_basketCount'>
          {basket.length}
        </span>

     </div>
       </Link>





     </div>


    </div>

  )


}

export default Header
