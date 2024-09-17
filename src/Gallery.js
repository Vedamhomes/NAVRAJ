import React, { useEffect } from 'react';

function Gallery() {
  useEffect(() => {
    // Initialize Masonry after the component mounts
    const galleryElem = document.querySelector('.gallery');
    if (galleryElem) {
      new Masonry(galleryElem, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true
      });
    }
  }, []);

  return (
    <div className="gallery">
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
