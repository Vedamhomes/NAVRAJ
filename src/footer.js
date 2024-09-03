import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content_section">
        <div className="footer_image_and_about">
          <Link to="/">
            <figure className="footer_figure">
              <img
                className="footer_image"
                width="350"
                height="92"
                src="https://navrajindia.com/wp-content/uploads/2023/12/Navraj-logo-Gold-1.png"
                alt="Navraj Infratech logo"
              />
            </figure>
          </Link>
          <div className="footer_image_box_content">
          NAVRAJ INFRATECH: A decade of shaping Gurugram's skyline with expertise and innovation. Pioneering innovative living solutions, elevating living standards with visionary design and impeccable craftsmanship.
          </div>
        <div class="wrapper">
          <a  class="icon facebook">
            {/* <div class="tooltip">Facebook</div> */}
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
          <a class="icon twitter">
            {/* <div class="tooltip">Twitter</div> */}
            <span>
            <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
          <a class="icon instagram">
            {/* <div class="tooltip">Instagram</div> */}
            <span>
            <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a class="icon youtube">
            {/* <div class="tooltip">Youtube</div> */}
            <span>
            <FontAwesomeIcon icon={faYoutube} />
            </span>
          </a>
        </div>
        </div>


        <div className="footer_other">
          <div className="footer_other_about">
            <h3 className="footer_other_header">About Navraj</h3>
            <ul className="footer_other_about_list">
              <li className="footer_other_about_list_item">
                <a href="leadership">Leadership</a>
              </li>
              <li className="footer_other_about_list_item">
                <a href="legacy">Legacy</a>
              </li>
              <li className="footer_other_about_list_item">
                <a href="projects">Projects</a>
              </li>
            </ul>
          </div>

          {/* <div className="footer_other_about">
            <h3 className="footer_other_header">Newsroom</h3>
            <ul className="footer_other_about_list">
              <li className="footer_other_about_list_item">
                <a href="#">News and Events</a>
              </li>
            </ul>
          </div> */}

          {/* <div className="footer_other_about">
            <h3 className="footer_other_header">Download</h3>
            <ul className="footer_other_about_list">
              <li className="footer_other_about_list_item">
                <a href="#">Company Profile</a>
              </li>
              <li className="footer_other_about_list_item">
                <a href="#">Analia Brochure</a>
              </li>
              <li className="footer_other_about_list_item">
                <a href="#">Navraj Media Kit</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="footer_copyright_divider"></div>

      <div className="footer_copyright_section">
        &copy; {new Date().getFullYear()} Navraj Infratech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
