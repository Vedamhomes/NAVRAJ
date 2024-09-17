// src/Gallery.js
import React, { useEffect, useRef } from 'react';

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Initialize Masonry
    const galleryElem = galleryRef.current;
    if (galleryElem) {
      new Masonry(galleryElem, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true
      });
    }
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="gallery-item">
        <a href="https://via.placeholder.com/800x600" data-lightbox="gallery" data-title="Image 1">
          <img src="https://via.placeholder.com/200x150" alt="Placeholder 1" />
        </a>
      </div>
      <div className="gallery-item">
        <a href="https://via.placeholder.com/800x600" data-lightbox="gallery" data-title="Image 2">
          <img src="https://via.placeholder.com/200x150" alt="Placeholder 2" />
        </a>
      </div>
      <div className="gallery-item">
        <a href="https://via.placeholder.com/800x600" data-lightbox="gallery" data-title="Image 3">
          <img src="https://via.placeholder.com/200x150" alt="Placeholder 3" />
        </a>
      </div>
      {/* Add more images as needed */}
    </div>
  );
}

export default Gallery;
