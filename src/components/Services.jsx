import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/pic1.jpg';
import img2 from '../assets/pic4.jpg';

const Services = () => {
  return (
    <div className='services'>
      <Carousel
        infiniteLoop
        autoPlay
        showStatue={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt='item1' />
          <p className='legend'>Full Stack</p>
        </div>
        <div>
          <img src={img2} alt='item2' />
          <p className='legend'>Mern Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
