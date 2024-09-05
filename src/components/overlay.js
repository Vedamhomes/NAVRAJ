// Overlay.js
import React, { useState, useEffect } from "react";
import styles from "./overlat.css";

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [imageSrc, setImageSrc] = useState('coming_soon_new.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setImageSrc('coming_soon_new_mobile.jpg');
      } else {
        setImageSrc('coming_soon_new.jpg');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return (
    <div className="overlay">
      <img src={imageSrc} alt="Welcome" />
      <a href="/legacy" className="click_me_btn">
        <img className="click_me_btn_img" src="button.png" alt="click me" />
      </a>
      <button
        className="close-btn"
        onClick={handleClose}
        aria-label="Close Overlay"
      ></button>
    </div>
  );
};

export default Overlay;
