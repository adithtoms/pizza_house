export const addToCart=(pizza,varient,quantity)=>(dispatch,getState)=>{

 

  var cartItem={
    name:pizza.name,
    _id:pizza._id,
    image:pizza.image,
    varient:varient,
    quantity:Number(quantity),
    prices:pizza.price,
    price:pizza.price[0][varient]*quantity,
    
  }
  console.log(cartItem);
 

  dispatch({type:'ADD_TO_CART',payload:cartItem})
  
   
  const cartItems=getState().cartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}


export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
  dispatch({type:'DELETE_FROM_CART',payload:pizza})
  const cartItems=getState().cartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))

}