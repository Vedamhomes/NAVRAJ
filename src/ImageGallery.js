
// src/ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Add CSS for styling

const images = [
  { src: 'antalyas_gallery_003.jpg', alt: 'Image 1' },
  { src: 'antalyas_gallery_004.jpg', alt: 'Image 2' },
  { src: 'antalyas_gallery_005.jpg', alt: 'Image 3' },
   { src: 'antalyas_gallery_008.jpg', alt: 'Image 3' },
   { src: 'antalyas_gallery_009.jpg', alt: 'Image 3' },
  { src: 'antalyas_gallery_010.jpg', alt: 'Image 3' },
  { src: 'antalyas_gallery_011.jpg', alt: 'Image 3' },
  { src: 'antalyas_gallery_012.jpg', alt: 'Image 3' },
  { src: 'antalyas_gallery_013.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
           <a href={image.src}>
            <img src={image.src} alt={image.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
