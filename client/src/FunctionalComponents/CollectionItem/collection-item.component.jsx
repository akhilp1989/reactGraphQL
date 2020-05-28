import React from 'react'
import './collection-item.styles.scss'
import Button from '../Button/button-component'
import {connect} from 'react-redux';
import {addCartItem} from '../../Redux/Cart/cart.actions'


const collectionItem=({ item, addCartItem })=>{
    const { name, price, imageUrl } = item;
   //console.log(item)
   
    return(
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>
            <Button onClick={() =>addCartItem(item)}
            className ='custom-button' inverted >Add To Cart</Button>

           
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addCartItem:item =>dispatch(addCartItem(item))
   
})

export default connect(null,mapDispatchToProps)(collectionItem)