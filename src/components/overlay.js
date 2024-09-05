// Overlay.js
import React, { useState, useEffect } from "react";
import styles from "./overlat.css";

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClose = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return (
    <div className="overlay">
      {/* <div className="body_div">
        <div class="sign">
          <span class="fast-flicker">Coming</span>&nbsp;
          <span class="flicker">soon</span>
        </div>
      </div> */}
      <img src="coming_soon_new.jpg" alt="Welcome" />
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
