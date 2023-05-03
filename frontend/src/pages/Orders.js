import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderActons'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap";

function OrdersPage() {

  const orderState = useSelector(state => state.getUserOrderReducer)
  const { error, loading, orders } = orderState

  // console.log(orders);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserOrders())
  }, [dispatch])


  return (
    <>
      <h1 className="text-center ">Your Orders </h1>
      {loading && <h1>Loading</h1>}
      {error && <h1>Something went wrong</h1>}
      {orders && orders.map((orde) => (
        <div className="container border p-4 bg-light">
          <Row>
            <Col md={4} key={orde.updatedAt}>
              <h5>Ordered on: {orde.updatedAt.slice(0,10)}</h5>
              <h4>Items :</h4>
              {orde.orderitems && orde.orderitems.map((item) => (
                <h6 key={item.name}>
                  {item.name} [{item.varients}] * {item.quantity}
                </h6>

              ))}
              <h4 className='text-primary'>Order Amount: {orde.orderAmount}</h4>

            </Col>
          </Row>
        </div>
      ))}
    </>
  )
}

export default OrdersPage