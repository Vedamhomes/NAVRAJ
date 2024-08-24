import React, { useRef } from "react";
import styles from "./coreStrength.css";
import emailjs from "@emailjs/browser";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

const CoreStrength = (props) => {
const { setIsInputModalOpen } = props;
  return (
    <div className="core_strength_container">
      <div>
        <div className="core_strength_header">
          Our Core Strengths Move this to Lagacy page
        </div>
        <div className="core_strength_content_container">
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="barn.jpg"
                alt="Timeless Designs"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">
                Timeless Designs &amp; Layouts
              </h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="building.png"
                alt="Strategic Locations"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">
                Strategic Locations
              </h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="/quality.jpg"
                alt="Bespoke Quality"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">
                Bespoke Quality
              </h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="values.png"
                alt="Values & Integrity"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">
                Values & Integrity
              </h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="networking.png"
                alt="Network"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">Network</h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="transparency.png"
                alt="Transparency"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">Transparency</h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="financial.png"
                alt="Financial Stability"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">
                Financial Stability
              </h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="idea.png"
                alt="Innovation"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">Innovation</h3>
            </div>
          </div>
          <div className="core_strength_content_box">
            <div className="core_strength_content_box_icon">
              <img
                className="core_strength_content_box_img"
                src="building.png"
                alt="Our Land"
              />
            </div>
            <div className="core_strength_content_box_item">
              <h3 className="core_strength_content_box_item_p">Land</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="inquire_container">
        <div className="inquire_container_header">
          <span className="inquire_container_header_content">
            Secure Your Place in Luxury. Enquire for Availability.
          </span>
        </div>
      </div>

      <div className="info_box">
        <div className="info_box_text">
          Don't Miss Out. Enquire Today and Schedule Your Site Visit.
        </div>

        <div className="info_box_number">
          <div onClick={() => setIsInputModalOpen(true)} className="info_box_number_text">Call 9871534959</div>
        </div>
      </div>
    </div>
  );
};

export default CoreStrength;
