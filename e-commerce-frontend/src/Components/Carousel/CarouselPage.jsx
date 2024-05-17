import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselPage.css'
import img1 from '../Assets/carousel/c1.jpg';
import img2 from '../Assets/carousel/c2.jpg';
import img3 from '../Assets/carousel/c3.jpg';
import img4 from '../Assets/carousel/c4.jpg';
import img5 from '../Assets/carousel/c5.jpg';
import img6 from '../Assets/carousel/c6.jpg';
import img7 from '../Assets/carousel/c7.jpg';
import img8 from '../Assets/carousel/c8.jpg';
import img9 from '../Assets/carousel/c9.jpg';

const CarouselPage = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000} className='carouselitem'>
      <img
        className=" d-block w-100"
        id="image"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img4}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img5}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img6}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img7}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img8}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        id="image"
        src={img9}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);
}

export default CarouselPage