import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import UserList from '../components/UserList';
import AddPizza from '../components/AddPizza';
import OrderList from '../components/OrdersList';
import PizzasList from '../components/PizzasList';
import {  useSelector } from 'react-redux';

function Admin() {
   const userState=useSelector(state=>state.loginUserReducer)
   const {currentUser}=userState

   useEffect(()=>{
   if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
    window.location.href='/'
   }
   },[])

  const [activeComponent, setActiveComponent] = useState('userList');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'userList':
        return <UserList />;
      case 'pizzaList':
        return <PizzasList />;
      case 'addPizza':
        return <AddPizza />;
      case 'orderList':
        return <OrderList />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container className="mx-auto">
        <Row>
          <h1 className="text-center bg-black text-white m-3">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: '400px', marginTop: '100px' }}>
              <Button onClick={() => handleButtonClick('userList')}>All Users</Button>
              <Button onClick={() => handleButtonClick('pizzaList')}>All Pizza</Button>
              <Button onClick={() => handleButtonClick('addPizza')}>Add New Pizza</Button>
              <Button onClick={() => handleButtonClick('orderList')}>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            {renderComponent()}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
