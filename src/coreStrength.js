import React, { useRef } from "react";
import styles from "./coreStrength.css";
import emailjs from "@emailjs/browser";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

const CoreStrength = (props) => {
const { setIsInputModalOpen } = props;
  return (
    <div className="core_strength_container">
      <div className='image_container'>
        <img className='main_image' fetchpriority="high" decoding="async" src="MarketingDocket_page-0004.jpg" alt="" data-no-retina=""/>
      </div>

      <div className="info_box">
        <div className="info_box_text">
          Don't Miss Out. Enquire Today and Schedule Your Site Visit.
        </div>

        <div className="info_box_number">
          <div onClick={() => setIsInputModalOpen(true)} className="info_box_number_text">Call 9871534959</div>
        </div>
      </div>
    </div>
  );
};

export default CoreStrength;
