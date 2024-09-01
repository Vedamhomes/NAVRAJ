// Overlay.js
import React, { useState, useEffect } from 'react';
import styles from './overlat.css';

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClose = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return (
    <div className="overlay">
      <img src="MarketingDocket_page-0002.jpg" alt="Welcome" />
      <button className="close-btn" onClick={handleClose} aria-label="Close Overlay"></button>
    </div>
  );
};

export default Overlay;
