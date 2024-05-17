import React from 'react'
import './About.css'
import CarouselPage from '../Carousel/CarouselPage';
const About = () => {
  return (
    <div className="main">
      <div className="container">
         
        <div className="title"><h1>The Gateway to Indian Timeless Heritage</h1></div>
        <div className="desc">We aim to provide a platform to Indian Handloom Weavers and Handicraft Artisans to sell their traditional handicraft products online, paving the way for their financial and social empowerment. This will also help in promoting their skills while eliminating the intermediaries.We hope to raise the dignity of the Indian artisans and kindle an interest for an unsurpassed legacy of craft that spans millennia and spreads across the length and breadth of India.</div>
        <div className="carousel">
            <CarouselPage/>
        </div>
      </div>

    </div>
        
  );
}

export default About