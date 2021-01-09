import React from 'react'
import './Product.css'
import { useStateValue } from "../store/StateProvider.js"
import Zoom from 'react-reveal'



const  Product =({ id, title,image, price, rating})=> {
  // gives component access to the store React Context API
  const [{basket}, dispatch] = useStateValue()










  const addToBasket = () => {

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
    },

    });

  }



  const stars = (rate) =>{
    let stars = '';
    while(rate !== 0){
      stars += '⭐️'
      rate--
    }
    return stars
  }
  const star = stars(rating)

  return(

    <Zoom>




  <  div className='product'>

   <div className="product__info">

     <p>{title}</p>
     <p className='product__price'>
       <small>
         $
       </small>
       <strong>{price}</strong>
     </p>
     <div className="product_rating">
       <p>{star !== '' ? star: 'No Reviews'}</p>
     </div>

   </div>
   <img src={image} alt="" />
   <button onClick={addToBasket} >Add to Basket</button>

  </div>
  </Zoom>
  )
}

export default Product
