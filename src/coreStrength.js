import React, { useRef } from "react";
import styles from "./coreStrength.css";
import emailjs from "@emailjs/browser";
import { useLocation } from 'react-router-dom';
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ImageGallery from './ImageGallery';

const CoreStrength = (props) => {
const { setIsInputModalOpen } = props;

const location = useLocation();

  return (
    <div className="core_strength_container">
      <div className='image_container'>
        <img className='main_image_3' fetchpriority="high" decoding="async" src="The_Pinnacle_of_opulence.jpg" alt="Natural Light Room" data-no-retina=""/>
	  <div className="main_image_cont_box animate__animated  animate__fadeInRight" style={{ animationDelay: '3s' }}>
         <p className='first-line'>The Pinnacle of opulence </p> <p className='second-line'>3&4 BHK Ultra Luxury Apartments</p><p className='third-line'>Price starts ₹ 3.36* Cr Onwards</p>
        </div>
        <div onClick={() => setIsInputModalOpen(true)} className='main_image_4_box'>
          <button className='main_image_4'>Click to know structural online</button>
          {/* <img className='main_image_4' fetchpriority="high" decoding="async" src="button2.png" alt="" data-no-retina=""/> */}
        </div>
      </div>
     { /*  <div className='image_container'>
        <img className='main_image_2' fetchpriority="high" decoding="async" src="MarketingDocket_page-0004.jpg" alt="Marketing Docket" data-no-retina=""/>
      </div>*/}
		{ /* custom code for gallery */}
		<div className="image-gallery" >
        <ImageGallery />
	      </div> 
	 { /* end custom code for gallery */}
      <div className='image_container'>
        <img className='main_image' fetchpriority="high" decoding="async" src="MarketingDocket_page-0005.jpg" alt="The Pinnacle of Opulence" data-no-retina=""/>
      </div>
      {location.pathname === '/projects' && (<div className='image_container'>
        <img className='main_image_2 main_image_3' fetchpriority="high" decoding="async" src="our_core_strength01.png" alt="" data-no-retina=""/>
      </div>)}
	      {/*custom code for map*/}
	<div className='map_container'>
    		<div className='main_map_sect'>
        	<div className='map_section1'>
            	<iframe width="800" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28296.08671365185!2d76.95898396386575!3d28.442927268023087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17aff4739303%3A0x103ebdbc4748cad8!2sSector%2037D%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1726577930581!5m2!1sen!2sin" title="Navraj Infratech" frameBorder="0">
            	</iframe>
        	</div>

		<div className='map_section2'>
          			<div className='map_section2_cont'>
                       <h3> CONNECTED WITH THE WORLD </h3>
                        <p className="desc">
						Sector 37D is strategically located with excellent connectivity to major employment hubs and key areas in the city.</p>
								<p className="desc"><strong>Convenient Access to Key Locations</strong>:</p>
                  <ul>
                  <li><strong>10 Minutes</strong>: To Dwarka and Ansal Plaza.</li>
                  <li><strong>Near Dwarka Expressway</strong>: Connecting you to various parts of Gurgaon and beyond.</li>
                  <li><strong>Connected to Mahamaya Flyover</strong>: Ensuring smooth transit.</li>
                  <li><strong>Few Minutes from Delhi</strong>: Easily reachable via Dwarka Expressway.</li>
                  <li><strong>10 Minutes Drive</strong>: To Hero Honda Chowk.</li>
                  </ul>
							</div>
							
				</div>
		
          </div>
	</div>
		
       <a href="https://api.whatsapp.com/send?phone=9266811009&text=NAVRAJ INFRATECH"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer" >
	       <span>
             <FontAwesomeIcon icon={faWhatsapp} />
            </span>
    </a>
	
	 { /* end custom code for map */}
		    
	<div className="info_box">
        <div className="info_box_text">
        Experience the Epitome of Elegance. Schedule a Private Tour.        </div>

          <button onClick={() => setIsInputModalOpen(true)} className="info_box_number info_box_number_text">Call 92668 11009</button>
      </div>
    </div>
  );
};

export default CoreStrength;
