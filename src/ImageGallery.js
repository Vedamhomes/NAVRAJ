
// src/ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Add CSS for styling

const images = [
  { src: 'antalyas_gallery_003.jpg', alt: 'Image 1' },
  { src: 'antalyas_gallery_004.jpg', alt: 'Image 2' },
  { src: 'antalyas_gallery_005.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
           <a href={require(`./images/${image.src}`)} data-lightbox="gallery" data-title={image.title}>
            <img src={require(`./images/${image.src}`)} alt={image.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
