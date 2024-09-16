
// src/ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Add CSS for styling

const images = [
  { src: '/assets/image1.jpg', alt: 'Image 1' },
  { src: '/assets/image2.jpg', alt: 'Image 2' },
  { src: '/assets/image3.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
