import React, { useState } from 'react';
import './imageslider.css'; 
import images from'./image1.png';
import  images from'./image2.png';
import images from'./image3.png';



const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
            
          />
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
