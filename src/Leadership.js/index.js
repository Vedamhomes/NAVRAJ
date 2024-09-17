import React, { useState } from "react";
import styles from "./style.css";
import Navbar from "../navbar";
import Footer from "../footer";
import UserInputModal from "../UserInputModal";
import Enquire from "../components/enquire";

const Leadership = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <div className="leadership">
      <Navbar setIsInputModalOpen={setIsInputModalOpen} />
      <div className="image_container">
        <img
          className="main_image"
          fetchpriority="high"
          decoding="async"
          src="https://navrajindia.com/wp-content/uploads/2024/05/culture-banner_option-3.jpg"
          alt="Raj Yadav"
          data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
          data-no-retina=""
          data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
        />
      </div>

      <div className="leadership_container">
        <section className="info_container">
          <div className="info_container_left">
            <img
              className="leadership_info_image"
              fetchpriority="high"
              decoding="async"
              src="https://navrajindia.com/wp-content/uploads/2024/05/Raj-1-758x564.jpg"
              alt=""
            />
          </div>
          <div className="info_container_right">
            <h1 className="info_heading">
            "Transparency is the cornerstone of building consumer trust," 
            </h1>
            <div className="info_sub_heading_box">
              <p>Mr. Raj Yadav</p>
              <p>Founder, Navraj Infratech</p>
            </div>
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
              With a wealth of experience in land acquisition and strategic partnerships, Mr. Yadav possesses an uncanny ability to pinpoint prime locations that align perfectly with specific target markets, project types, future growth potential, accessibility, and nearby infrastructure development.
              </span>
              <span className="info_sub_heading_content_two">
              Renowned for his unwavering commitment to transparency, Mr. Yadav ensures that all necessary approvals from regulatory bodies are obtained with meticulous precision, comprehensive documentation, and strict adherence to timelines. This meticulous approach fosters trust and confidence among stakeholders, solidifying Navraj Infratech's reputation as a reliable and trustworthy partner in the real estate industry.
              </span>
            </div>
          </div>
        </section>

        <section className="info_container">
          <div className="info_container_left">
            <img
              className="leadership_info_image"
              fetchpriority="high"
              decoding="async"
              src="	https://navrajindia.com/wp-content/uploads/2024/05/Naveen-2-758x564.jpg"
              alt="Naveen Yadav"
            />
          </div>
          <div className="info_container_right">
            <h2 className="info_heading">
            "Active listening to our customers is the fundamental step in creating successful products,"
            </h2>
            <div className="info_sub_heading_box">
              <p>Mr. Naveen Yadav</p>
              <p>Founder, Navraj Infratech</p>
            </div>
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
              A keen observer of market trends and a skilled analyst, Mr. Yadav excels in identifying unmet consumer needs and developing innovative solutions. To ensure that our products truly resonate with our target audience, Mr. Yadav actively engages with potential customers to gain a deep understanding of their aspirations and preferences for a comfortable and convenient lifestyle.
              </span>
              <span className="info_sub_heading_content_two">
              In today's rapidly evolving market, characterized by rising inflation and intense competition, offering spacious living spaces at competitive prices while maintaining uncompromising standards of quality and timely delivery presents a significant challenge. Mr. Yadav's expertise in this area is invaluable, as he leverages his insights to create products that not only meet but exceed customer expectations, ensuring their complete satisfaction.
              </span>
            </div>
          </div>
        </section>
      </div>

      <Enquire setIsInputModalOpen={setIsInputModalOpen}/>
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

export default Leadership;
