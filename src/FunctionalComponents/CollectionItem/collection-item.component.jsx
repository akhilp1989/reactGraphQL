import React from 'react'
import './collection-item.styles.scss'
import Button from '../Button/button-component'
import {connect} from 'react-redux';
import {addCartItem} from '../../Redux/Cart/cart.actions'


const collectionItem=(props)=>{
   // console.log(props)
    return(
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage:`url(${props.item.imageUrl})`
            }}/>
            <div className='collection-footer'>
            <span className='name'>{props.item.name}</span>
            <span className='price'>{props.item.price}</span>
            </div>
            <Button onClick={(item)=>props.addCartItem(item)}
            className ='custom-button' inverted >Add To Cart</Button>

           
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addCartItem:item =>dispatch(addCartItem(item))
   
})

export default connect(null,mapDispatchToProps)(collectionItem)