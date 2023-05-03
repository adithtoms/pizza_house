import React from 'react'
import pizza2 from '../assets/images/pizza2.jpg'
import pizza3 from '../assets/images/pizza3.jpg'
import pizza1 from '../assets/images/pizza1.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function Banner() {
  return (
    <Carousel slide={false}>
      <Carousel.Item style={{maxHeight:"600px",position:"relative"}}>
        <img
          className="d-block w-100"
          src={pizza2}
          alt="First slide"
        />
        <Carousel.Caption style={{position:"absolute",top:"20%",left:"10px"}}>
          <h1 style={{color:"smokewhite",fontWeight:"bolder", fontFamily:"cursive"}}>Experiencing a rough day? <br/> Here, take a slice!</h1>
          <Button className='bg-warning py-3 px-5 mt-3'>Order Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:"600px",position:"relative"}}>
        <img
          className="d-block w-100"
          src={pizza1}
          alt="Second slide"
        />

        <Carousel.Caption style={{position:"absolute",top:"20%",left:"20px"}}>
          <h1 style={{color:"smokewhite",fontWeight:"bolder", fontFamily:"cursive"}}>Any time is a good time for pizza.</h1>
          <Button className='bg-warning py-3 px-5 mt-3'>Order Now</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:"600px",position:"relative"}}>
        <img
          className="d-block w-100"
          src={pizza3}
          alt="Third slide"
        />

        <Carousel.Caption style={{position:"absolute",top:"20%",left:"30px"}}>
          <h1 style={{color:"smokewhite",fontWeight:"bolder", fontFamily:"cursive"}}>The cheesier, the better!</h1>
          <Button className='bg-warning py-3  px-5 mt-3 '>Order Now</Button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner