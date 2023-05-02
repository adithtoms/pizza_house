import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'


function PizzaCard({ pizza }) {

    const[quantity,SetQuantity]=useState(1)
    const[varient, SetVarient]=useState("small")
    
    const  dispatch=useDispatch()

    function addtocart(){
       dispatch(addToCart(pizza,varient,quantity))
    }


    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded m-3' >
            <h4>{pizza.name}</h4>
            <img className='img-fluid' src={pizza.image} alt='pizza' style={{width:'100%',height:'200px'}} />
            <div className='conti'>
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=>{SetVarient(e.target.value)}}>
                        {pizza.varients.map(item => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{SetQuantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, index) => {
                            return <option key={x} value={index + 1}>{index + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='conti'>
                <div className='m-1 w-100'>
                    <h5 className='mt-1'>Price :{pizza.price[0][varient]*quantity} Rs/- </h5>
                </div>
                <div className='m-1 w-100'>
                     <button className='btn btn-success' onClick={addtocart}>Add to Cart</button>
                </div>
                 
            </div>

        </div>
    )
}

export default PizzaCard