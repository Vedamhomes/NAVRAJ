import React, { useState } from 'react'
import style from "./style.css"
import Navbar from '../navbar';
import Footer from '../footer';
import UserInputModal from '../UserInputModal';

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
          src="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
          alt=""
          data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
          data-no-retina=""
          data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
        />
      </div>

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
