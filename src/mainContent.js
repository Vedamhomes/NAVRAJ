import React from "react";
import style from "./main.css";
import "animate.css";

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
            // width="600"
            // height="350"
            src="https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1.jpg"
            alt=""
            srcSet="https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1.jpg 1000w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-300x200.jpg 300w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-768x512.jpg 768w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-900x600.jpg 900w, https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1-496x331.jpg 496w"
          ></img>
        </div>

        <div className="first_section_right animate__animated animate__backInRight">
          <p className="first_section_right_p">
            For fifteen years, a unique appetite has fueled the creation of
            extraordinary living spaces. Born from a desire for something more,
            these exceptional thinkers and builders have dedicated their lives
            to redefining the concept of quality.
          </p>

          <p className="first_section_right_p">
            Discover our journey, our ambitious plans for the future, and our
            unwavering vision. Join us in shaping a legacy of innovation and
            excellence.
          </p>

          <p className="first_section_right_p">
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
            <span>ABOUT NAVRAJ</span>
          </div>
        </div>
      </section>

      {/* Info section */}

      <section className="info_section">
        <div className="info_section_box">
          <div className="info_left_section">
            <h2 className="info_right_header animate__animated animate__backInDown">
              Navraj Group has expanded its land holdings with the acquisition
              of a 5.3 million square foot parcel.
            </h2>

            <p className="info_right_content animate__animated animate__backInUp">
              Our plans include creating luxurious residential communities on
              approximately 4 million square feet of the land. The remaining
              area will be transformed into a dynamic commercial and retail hub,
              strategically situated in the most desirable locations within
              Haryana and Delhi NCR.
            </p>

            <button className="info_right_btn">
              <a className="info_right_btn_a" href="/projects">
                OUR projects
              </a>
            </button>
          </div>
          <div className="info_right_section animate__animated">
            <div className="info_left_box animate__animated animate__fadeInTopRight">
              <span className="info_left_header">
                Soaring High: Navraj’s Remarkable Growth
              </span>

              <p className="info_left_content">
                Navraj has achieved a staggering 91% growth in 2023, solidifying
                our position as a leading force in the luxury real estate
                market. As we continue to expand our brand equity, the future
                looks exceptionally bright.
              </p>
            </div>
            <div className="info_left_box animate__animated  animate__fadeInRight">
              <span className="info_left_header">Impressive Progress</span>

              <p className="info_left_content">
                Our commitment to innovation and efficiency is evident in our
                rapidly rising towers, a testament to our ability to deliver
                projects on time.
              </p>
            </div>
            <div className="info_left_box animate__animated animate__fadeInBottomRight">
              <span className="info_left_header">
                The Choice of the Discerning
              </span>

              <p className="info_left_content">
                Trusted by discerning high-net-worth individuals, Navraj has
                earned a reputation for excellence. Our client testimonials are
                a reflection of the trust and confidence placed in us to create
                exceptional living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
