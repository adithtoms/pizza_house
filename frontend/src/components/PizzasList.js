import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import { Button, Table } from "react-bootstrap";
import { Link, } from 'react-router-dom'
import axios from 'axios';


function PizzasList() {

    const dispatch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

   const handleDelete=async(id)=>{
     const res= await axios.delete('/deletepizza/'+id)
     alert(res.data.message)
    }

    return (
        <>
            <div className='row justify-content-center '>
                {loading ? (<h1>Loading..</h1>)
                    : error ? (<h1>Something went wrong</h1>)
                        : (
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Pizza Name</th>
                                            <th>Prices</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pizzas &&
                                            pizzas.map((pizza) => (
                                                <tr>
                                                    <td>
                                                        <img
                                                            src={pizza.image}
                                                            alt="logo"
                                                            width="100px"
                                                            height="100px"
                                                        />
                                                    </td>
                                                    <td>{pizza.name}</td>
                                                    <td>
                                                        Small : {pizza.price[0]["small"]}
                                                        <br />
                                                        Medium : {pizza.price[0]["medium"]}
                                                        <br />
                                                        Large : {pizza.price[0]["large"]}
                                                    </td>
                                                    <td>{pizza.category}</td>
                                                    <td>
                                                    <Link to={`/admin/edit/${pizza._id}`}> <Button>Edit</Button></Link>
                                                     <Button className='bg-danger ms-2' onClick={()=>handleDelete(pizza._id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </div>


                        )}

            </div>
           
        </>
    )
}

export default PizzasList