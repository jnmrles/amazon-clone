import React from 'react'
import './Product.css'



const  Product =({ title,image, price, rating})=> {

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
   <button>Add to Basket</button>

  </div>
  )
}

export default Product
