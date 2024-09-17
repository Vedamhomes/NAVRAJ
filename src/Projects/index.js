import React, { useState } from 'react'
import style from "./style.css"
import Navbar from '../navbar';
import Footer from '../footer';
import UserInputModal from '../UserInputModal';
import Enquire from '../components/enquire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import CoreStrength from '../coreStrength';
import ProjectContent from '../ProjectContent';

const Projects = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <div className="projects">
      <Navbar setIsInputModalOpen={setIsInputModalOpen} />
      <div className="image_container">
        <img
          className="main_image"
          fetchpriority="high"
          decoding="async"
          src="navraj_project_page.jpg"
          alt="Navraj Project Page"
       />
      </div>

      <div className='project_info_box'>
        <div className='project_info_content_box'>
          <p className='project_info_content'>
          Analia, aptly named for its luminous essence, stands as a beacon of elegance in the realm of residential properties. With its architectural brilliance and captivating design, Analia illuminates the skyline, drawing the gaze of all who behold it. Its spacious interiors are bathed in natural light, creating an ambiance of warmth and serenity. Each corner of Analia is thoughtfully crafted to harmonize with its surroundings, blending seamlessly into the tapestry of the cityscape. As the sun sets, Analia continues to radiate its brilliance, casting a soft glow that whispers tales of luxury and refinement to those fortunate enough to call it home.
          </p>

          <div className='project_info_sub_content'>
            <a href="#project_amenities">
          <FontAwesomeIcon className='info_down_arrow' icon={faArrowDown} />
          <p>Explore Amenities</p>
            </a>
          </div>
        </div>

      </div>

      <ProjectContent />
      <CoreStrength setIsInputModalOpen={setIsInputModalOpen} />
      <Footer />

      {isInputModalOpen && (
        <UserInputModal
          isInputModalOpen={isInputModalOpen}
          setIsInputModalOpen={setIsInputModalOpen}
        />
      )}
    </div>
  )
}

export default Projects
