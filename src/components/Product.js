import React from 'react'
import './Product.css'
import { useStateValue } from "../store/StateProvider.js"



const  Product =({ id, title,image, price, rating})=> {

  const [{basket}, dispatch] = useStateValue()


console.log("this is basket ", basket)

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


  <div className='product'>

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
  )
}

export default Product
