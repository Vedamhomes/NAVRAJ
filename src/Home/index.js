import React, { useState } from "react";
import styles from "./style.css";
import Navbar from "../navbar";
import MainContent from "../mainContent";
import CoreStrength from "../coreStrength";
import Footer from "../footer";
import UserInputModal from "../UserInputModal";
import Overlay from "../components/overlay";

const Home = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <div className="App">
      <Overlay />
      <Navbar setIsInputModalOpen={setIsInputModalOpen} />
      <div className="image_container">
        <img
          className="main_image"
          fetchpriority="high"
          decoding="async"
          src="main_img.jpg"
          alt=""
          data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
          data-no-retina=""
          data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
        />
        <div className="image_container_txt_box centered animate__animated  animate__fadeInRight" style={{ animationDelay: '3s' }}>
        Elevated Living, Exceptional Experiences.
        </div>
      </div>
      <MainContent />

      <CoreStrength setIsInputModalOpen={setIsInputModalOpen} />

      <Footer />

      {isInputModalOpen && (
        <UserInputModal
          isInputModalOpen={isInputModalOpen}
          setIsInputModalOpen={setIsInputModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
