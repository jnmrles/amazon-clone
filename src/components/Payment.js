import React from 'react'
import { Link } from 'react-router-dom'
import{useStateValue} from '../store/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'

const Payment = () =>{

  const [{basket, user}, dispatch] = useStateValue()


  return(

   <div className='payment'>
     <div className='payment__container'>
       <h1>
         Checkout(
           <Link to='/checkout'>{basket?.length} items</Link>
         )
       </h1>
       <div className='payment__section'>
         <div className='payment__title'>
           <h3>
           Delivery Address
             </h3>
         </div>
         <div className='payment__address'>
           <p>{user?.email}</p>

           <p>123 React Lane</p>
           <p>Los Angeles, California</p>
         </div>

       </div>
       <div className='payment__section'>
       <div className='payment__title'>
           <h3>
           Review Items and Delivery
             </h3>
         </div>
         <div className='payment__items'>
           {

           basket.map(item => {
               return <CheckoutProduct  id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>})
           }
         </div>

</div>
<div className='payment__section'>

</div>


     </div>

   </div>
  )
}


export default Payment
