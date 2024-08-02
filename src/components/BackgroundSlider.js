import React, { useEffect, useState } from 'react';
import image1 from '../assets/slide.png';
import image2 from '../assets/slide2.png';
import image3 from '../assets/slide3.png';
import image4 from '../assets/slide4.png';
import image5 from '../assets/slide5.png';

const images = [image1, image2, image3, image4, image5];

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlider;
