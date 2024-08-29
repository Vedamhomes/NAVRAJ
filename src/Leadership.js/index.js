import React, { useState } from "react";
import styles from "./style.css";
import Navbar from "../navbar";
import Footer from "../footer";
import UserInputModal from "../UserInputModal";

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
          alt=""
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
            <h2 className="info_heading">
              “Transparency is the key to win the confidence of the consumer.”
            </h2>
            <div className="info_sub_heading_box">
              <p>Mr. Raj Yadav</p>
              <p>Founder, Navraj Infratech</p>
            </div>
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
                Mr. Raj has an extensive experience in land aggregation and
                liaisoning. He is incredibly skilled in identifying the right
                location based on the target segment, kind of product, growth
                perspective, connectivity, and upcoming infrastructure in close
                vicinity of the property.
              </span>
              <span className="info_sub_heading_content_two">
                Being very transparent in his modus-operandi, he ensures that
                all the relevant approvals are in place from the concerned
                authorities with utmost clarity, robust paperwork and certain
                timelines.
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
              alt=""
            />
          </div>
          <div className="info_container_right">
            <h2 className="info_heading">
              “Listening to the consumer is the first step in delivering a
              successful product.”
            </h2>
            <div className="info_sub_heading_box">
              <p>Mr. Naveen Yadav</p>
              <p>Founder, Navraj Infratech</p>
            </div>
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
                An intense market observer and a true analyst in identifying the
                need gap and coming up with a solution for every product he puts
                his efforts in. Naveen interacts with the potential target
                segment to understand the spectrum of requirements in terms of
                how to make the living experience of the consumer delightful and
                convenient.
              </span>
              <span className="info_sub_heading_content_two">
                In this fast-paced environment, rising inﬂation and already
                existing competition has made the market very challenging
                especially when it comes to offering larger living space at a
                competitive cost while maintaining quality and timeline
                standards. This is where his expertise plays a critical role in
                generating consumer delight.
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

export default Leadership;
