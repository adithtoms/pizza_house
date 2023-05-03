import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PizzaCard from '../components/PizzaCard'
import { getAllPizzas } from '../actions/pizzaActions'
import Banner from '../components/Banner';
import Filters from '../components/Filters'
import Footer from '../components/Footer';


function Home() {

  const dispatch = useDispatch()

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)

  const { pizzas, error, loading } = pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])


  return (
    <>
    <Banner/>
    <Filters/>
      <div  className='row justify-content-center '>
        {loading ? (<h1>Loading..</h1>) 
        : error ? (<h1>Something went wrong</h1>) 
        : (
            pizzas.map(pizza => {
            return <div className='col-md-3 m-3' key={pizza._id}>
              <div >  <PizzaCard pizza={pizza} /></div>
            </div>
          })

        )}

      </div>
      <Footer/>
    </>
   
  )
}

export default Home