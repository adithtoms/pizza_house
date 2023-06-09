import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer,addPizzaReducer,  } from '../reducers/pizzaReducer'
import { cartReducer } from '../reducers/cartReducer'
import { loginUserReducer, registerUserReduser,getAllUsersReducer } from '../reducers/userReducer'
import { getUserOrderReducer, placeOrderReducer,allUserOrdersReducer } from '../reducers/orderReducer'




const finalReducer=combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReduser:registerUserReduser,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addPizzaReducer:addPizzaReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer
   
})


const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')) :null


const initialState={
   cartReducer:{ cartItems:cartItems},
   loginUserReducer:{currentUser:currentUser}
}

const composeEnhancers= composeWithDevTools({})

const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store