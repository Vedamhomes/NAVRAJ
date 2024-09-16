import React, { useRef } from "react";
import styles from "./coreStrength.css";
import emailjs from "@emailjs/browser";
import { useLocation } from 'react-router-dom';
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

const CoreStrength = (props) => {
const { setIsInputModalOpen } = props;

const location = useLocation();

  return (
    <div className="core_strength_container">
      <div className='image_container'>
        <img className='main_image_3' fetchpriority="high" decoding="async" src="natural_light_room_img.jpg" alt="Natural Light Room" data-no-retina=""/>
        <div onClick={() => setIsInputModalOpen(true)} className='main_image_4_box'>
          <button className='main_image_4'>Click to know structural online</button>
          {/* <img className='main_image_4' fetchpriority="high" decoding="async" src="button2.png" alt="" data-no-retina=""/> */}
        </div>
      </div>
      <div className='image_container'>
        <img className='main_image_2' fetchpriority="high" decoding="async" src="MarketingDocket_page-0004.jpg" alt="Marketing Docket" data-no-retina=""/>
      </div>
      <div className='image_container'>
        <img className='main_image' fetchpriority="high" decoding="async" src="MarketingDocket_page-0005.jpg" alt="The Pinnacle of Opulence" data-no-retina=""/>
      </div>
      {location.pathname === '/projects' && (<div className='image_container'>
        <img className='main_image_2 main_image_3' fetchpriority="high" decoding="async" src="our_core_strength01.png" alt="" data-no-retina=""/>
      </div>)}

      <div className="info_box">
        <div className="info_box_text">
        Experience the Epitome of Elegance. Schedule a Private Tour.        </div>

          <button onClick={() => setIsInputModalOpen(true)} className="info_box_number info_box_number_text">Call 9871534959</button>
      </div>
    </div>
  );
};

export default CoreStrength;
