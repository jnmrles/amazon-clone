import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import{useStateValue} from '../store/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format";

import { getBasketTool } from "../store/reducer";

const Payment = () =>{

  const [{basket, user}, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled,setDisabled ] = useState(true)

  const [succeeded, setSucceeded] = useState(true)
  const [processing, setProcessing] = useState(false)

  const [ clientSecret, setClientSecret] = useState(true)


  useEffect(() => {

      //generate stripe secret that allows you to capture payment
      const getClientSecret = async () =>{}

      getClientSecret()


  }, [basket])

  const handleChange =  (e) =>{

       // Listen for Changes in Card Elemet
    // Display any Errors as customer types card details
    setDisabled(e.empty)
    setError(e.error ? e.error.message: '')
  }

  const handleSubmit = async e => {
    // stripe logic
    e.preventDefault()
    setProcessing(true)



    // const payload = await stripe

  }




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
            <h3>
           Payment Method
             </h3>
             <div className='payment__details'>
               <form onSubmit={handleSubmit}>
                 <CardElement onChange={handleChange} />
                <div className='payment__priceContainer'>
                <CurrencyFormat

                renderText={(value) => (
                  <>
                  <h3>
                    Order Total: {value}
                    </h3>

                  </>
              )}
              decimalScale={2}
              value={getBasketTool(basket)} // Part of the homework
              displayType={"text"}
              thousandSeparator={true}
            prefix={"$"}

          />

            <button disabled={processing || disabled || succeeded }> <span>{processing ? <p>Processing</p>: "Buy Now"}</span></button>
       </div>

       {error && <div>{error}</div>}


      </form>

          </div>



       </div>


     </div>

   </div>
  )
}


export default Payment
