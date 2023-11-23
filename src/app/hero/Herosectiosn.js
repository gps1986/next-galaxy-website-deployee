'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';

const Herosectiosn = () => {
  const sliderRef = useRef(null);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the duration between slides (in milliseconds)
  };

  return (
    <div className="relative md:flex lg:flex lg:h-[550px] md:h-[550px] mx-auto overflow-hidden rounded-lg">
      {/* <div className="container mx-auto fixed top-0 left-0 right-0 z-10 bg-blue-500 text-white text-center py-2">
        <span>Contact us at: your@email.com | Toll-Free: 1-800-123-4567</span>
      </div> */}
      <Slider ref={sliderRef} {...carouselSettings} className="rounded-lg shadow-lg overflow-hidden">
        <div>
          <img
            src="/dist/img/crousal-one.png"
            alt="Carousel Image 1"
            className=" w-full h-full lg:flex md:flex lg:w-full lg:h-[600px] md:w-full md:h-[600px] object-fill transition-transform hover:scale-105"
          />
        </div>
        <div>
          <img
            src="/dist/img/crousal-two.png"
            alt="Carousel Image 2"
            className="w-full h-full lg:flex md:flex lg:w-full lg:h-[600px] md:w-full md:h-[600px] object-fill transition-transform hover:scale-105"
          />
        </div>
        <div>
          <img
            src="/dist/img/crousal-three.png"
            alt="Carousel Image 3"
            className="w-full h-full lg:flex md:flex lg:w-full lg:h-[600px] md:w-full md:h-[600px] object-fill transition-transform hover:scale-105"
          />
        </div>
        <div>
          <img
            src="/dist/img/crousal-two.png"
            alt="Carousel Image 3"
            className="w-full h-full lg:flex md:flex lg:w-full lg:h-[600px] md:w-full md:h-[600px] object-fill transition-transform hover:scale-105"
          />
        </div>
      </Slider>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition duration-300 hover:opacity-75">
        <button className="lg:text-3xl md:text-3xl text-orange-400 font-bold text-lg focus:outline-none hover:text-red-500 transition-colors" onClick={() => sliderRef.current.slickPrev()}>
          &#8249;
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 hover:opacity-75">
        <button className="lg:text-3xl md:text-3xl text-orange-400 font-bold text-lg focus:outline-none hover:text-red-500 transition-colors" onClick={() => sliderRef.current.slickNext()}>
          &#8250;
        </button>
      </div>
    </div>
  );
};


export default Herosectiosn