
// src/ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Add CSS for styling

const images = [
  { src: 'antalyas_gallery_003.jpg', alt: 'Image 1' },
  { src: 'antalyas_gallery_004.jpg', alt: 'Image 2' },
  { src: 'antalyas_gallery_005.jpg', alt: 'Image 3' },
   { src: 'antalyas_gallery_006.jpg', alt: 'Image 3' },
   { src: 'antalyas_gallery_007.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
           <a href={image.src} data-lightbox="gallery" data-title={image.title}>
            <img src={image.src} alt={image.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
