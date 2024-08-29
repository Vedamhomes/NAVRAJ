import React, { useState } from "react";
import style from "./style.css";
import Navbar from "../navbar";
import Footer from "../footer";
import UserInputModal from "../UserInputModal";

const Legacy = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <div className="legacy">
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

      <div className="legacy_container">
        <section className="info_container">
          <div className="info_container_left">
            <h1 className="info_container_left_heading">
              It’s all about well-thought spaces in life.
            </h1>
            <img
              className="leadership_info_image"
              fetchpriority="high"
              decoding="async"
              src="https://navrajindia.com/wp-content/uploads/2024/05/Raj-1-758x564.jpg"
              alt=""
            />
          </div>
          <div className="info_container_right">
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
                We at Navraj Infratech understand the importance of
                well-thought-of space in life and have been providing our
                customers with quality living spaces that are designed, putting
                intense thought on the utility for the customers by making their
                everyday life easy and delightful, in the cosmopolitan city of
                the National Capital Region, Gurugram.
              </span>
              <span className="info_sub_heading_content_one">
                We consider the entire length and breadth of the city as a
                canvas which can be painted with many ideas when it comes to
                creating bigger residential and commercial spaces at competitive
                costs.
              </span>
              <span className="info_sub_heading_content_two">
                With robust experience in land-aggregation and construction of
                judiciously-designed residential projects in the secondary
                market of Gurugram, we have now stepped into the primary market
                of Gurugram with 2 life-based premium residential projects to
                begin with. Our approach is based on the belief that our
                customers deserve bigger ideas and bigger spaces that they can
                call home.
              </span>
            </div>
          </div>
        </section>
      </div>
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

export default Legacy;
