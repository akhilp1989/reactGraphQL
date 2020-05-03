export const addCartItems=(cartItems,itemToAdd)=>{
    const itemExisting=cartItems.find(cartItem=>cartItem.id===itemToAdd.id);

    if(itemExisting){
      return cartItems.map(cartItem=>{
              if(cartItem.id===itemToAdd.id){
                  return {...cartItem,quantity:cartItem.quantity+1}
              }
              else{
                  return cartItem
              }

          })
      
    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,itemToDelete)=>{
    return cartItems.filter(cartItem=>cartItem.id!==itemToDelete.id)

}
export const removeItem=(cartItems,itemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===itemToRemove.id
    )
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>
        cartItem.id!==itemToRemove.id
        )
    }
    return cartItems.map(cartItem=>{
        if(cartItem.id===itemToRemove.id){
            return {...cartItem,quantity:cartItem.quantity-1}
        }
        else{
            return cartItem
        }
    })
       
    
}
