import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { getUserOrders } from '../actions/orderActons'



function Header() {

 const dispatch=useDispatch()

  const cartstate=useSelector(state=>state.cartReducer)
  const userstate=useSelector(state=>state.loginUserReducer)

  const {currentUser}=userstate

    return (
        <nav className="navbar navbar-expand-lg bg-black ">
        <div className="container">
          <a className="navbar-brand text-warning fs-1 " href="/">Pizza House</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light rounded"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              {currentUser? (<>
               
              <li className="nav-item">
                <a className="nav-link text-white"><span className='px-2 me-2' style={{width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"red",fontWeight:"bolder"}}>{currentUser.uname[0]}</span><b>{currentUser.uname}</b></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-white" href='/order' onClick={()=>{dispatch(getUserOrders())}}>Orders</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/cart">Cart {cartstate.cartItems.length}</a>
              </li>
                <li className="nav-item"> 
                  <a className="nav-link text-white" onClick={()=>{dispatch(logoutUser())}}>LogOut</a>
                  </li></>):(<li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
              </li>) }
              
              
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default Header