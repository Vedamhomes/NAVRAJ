import React from "react";
import style from "./main.css";

const MainContent = () => {
  return (
    <div className="main_container">
      <section className="first_section">
        <div className="first_section_left">
          <h2 className="about_box">About Navraj Infratech</h2>

          <img
            className="first_section_left_img"
            loading="lazy"
            decoding="async"
            width="600"
            height="350"
            src="https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1.jpg"
            alt=""
            srcSet="https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1.jpg 1000w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-300x200.jpg 300w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-768x512.jpg 768w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-900x600.jpg 900w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-496x331.jpg 496w"
          ></img>
        </div>

        <div className="first_section_right">
          <p className="first_section_right_p">
            Weaving a story of unparalleled appetite that gave rise to
            exceptional thinkers and builders who have since 15 years dedicated
            their lives to building quality living spaces and building them
            differently.
          </p>

          <p className="first_section_right_p">
            Their journey, their plans for the company, their vision, and their
            management plan is intricately elucidated on the pages that are to
            follow.
          </p>

          <p className="first_section_right_p third_section">
            Be a part of their story, be a part of something big.
          </p>

          <div className="about_icno_box">
            <span>
              <svg
                aria-hidden="true"
                className="e_arrow_right"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </span>
            <span>ABOUT NAVRAJ</span>Ṅ
          </div>
        </div>
      </section>

      {/* Info section */}

      <section className="info_section">
        <div className="info_section_box">
          <div className="info_left_section">
            <h2 className="info_right_header">
              Navraj Group has acquired a sellable land parcel area of 5.3
              million sq. ft
            </h2>

            <p className="info_right_content">
              Around 4 million is envisioned for premium luxury residential
              projects and rest of the area is planned for smart mix use
              commercial and retail projects in the most strategic and lucrative
              vicinities across Haryana and Delhi NCR.
            </p>

            <button className="info_right_btn">OUR projects</button>
          </div>
          <div className="info_right_section">
            <div className="info_left_box">
              <span className="info_left_header">91% Growth</span>

              <p className="info_left_content">
                Navraj has recorded a growth of 91% over 2023, the year looks
                significantly promising as we continue to grow our brand equity.
              </p>
            </div>
            <div className="info_left_box">
              <span className="info_left_header">Record Construction</span>

              <p className="info_left_content">
                Our towers rise with unmatched efficiency, showcasing our
                commitment to innovation and timely delivery.{" "}
              </p>
            </div>
            <div className="info_left_box">
              <span className="info_left_header">Trusted by the Elite</span>

              <p className="info_left_content">
                Preferred by high-net-worth individuals, our client testimonials
                reflect the trust placed in us to deliver exceptional results in
                luxury real estate.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
