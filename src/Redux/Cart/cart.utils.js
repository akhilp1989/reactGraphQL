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
