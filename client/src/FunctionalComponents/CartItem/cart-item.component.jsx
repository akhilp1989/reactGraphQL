import React from 'react'
import './cart-item.styles.scss'

const cartItem=({item:{imageUrl,name,price,quantity}})=>{
   // console.log(imageUrl);
    return(
        <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>${price}x{quantity}</span>
        </div>
        </div>
    )

}
//added React.memo() for memoization so that the whole component doesnt re-render when item changes
export default React.memo(cartItem)