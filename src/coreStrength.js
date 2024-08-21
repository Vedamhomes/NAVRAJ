import React, { useRef } from "react";
import styles from "./coreStrength.css";
import emailjs from '@emailjs/browser';
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'

const CoreStrength = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form_one = e.target;

        const formData = new FormData(form_one);
    
        const formObject = Object.fromEntries(formData.entries());

        // const { property_location, first_name, last_name, email_address, phone_number } = formObject;
        emailjs.sendForm('service_km55uus', 'template_9rdtcjc', form.current, {
          publicKey: 'TBo_tRqs2ZVR2GZcA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            new Notify({
                status: 'success',
                title: 'SUCCESS',
                text: 'Succefully recieved details',
                effect: 'fade',
                speed: 300,
                customClass: null,
                customIcon: null,
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 3000,
                gap: 20,
                distance: 20,
                type: 'outline',
                position: 'right top'
              })
          },
          (error) => {
            console.log('FAILED...');
            new Notify({
                status: 'error',
                title: 'ERROR',
                text: 'Error while recieving details',
                effect: 'fade',
                speed: 300,
                customClass: null,
                customIcon: null,
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 3000,
                gap: 20,
                distance: 20,
                type: 'outline',
                position: 'right top'
              })
          },
        );
        console.log('formObject', formObject)
    }
  return (
    <div className="core_strength_container">
      <div>
        <div className="core_strength_header">Our Core Strengths</div>
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
                src='building.png'
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
              <h3 className="core_strength_content_box_item_p">
              Network
              </h3>
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
              <h3 className="core_strength_content_box_item_p">
              Transparency
              </h3>
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
              <h3 className="core_strength_content_box_item_p">
              Innovation
              </h3>
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
              <h3 className="core_strength_content_box_item_p">
              Land
              </h3>
            </div>
          </div>
        </div>
      </div>
      
    <div className="inquire_container">
        <div className="inquire_container_header">
            <span className="inquire_container_header_content">Secure Your Place in Luxury. Enquire for Availability.</span>
        </div>

        <div className="inquire_container_form">
            <div className="inquire_container_form_heading">
                <p className="inquire_container_form_heading_text">* All fields are mandatory</p>
            </div>

            <form ref={form} className="input_form" onSubmit={handleSubmit}>
                <div className="form_input_container">
                    <select name="property_location" id="form-field-b66c734" className="form_input_box" required="required" title="* Property Location">
                        <option value="">Select Property Location</option>
                        <option data-ref="faridabad" data-belong="" value="faridabad"> Faridabad</option>
                        <option data-ref="gurugram" data-belong="" value="gurugram"> Gurugram</option>
                    </select>
                </div>

                <div className="form_input_container">
                    <input required className="form_input_box" id="first_name" name="first_name" placeholder="First name" />
                </div>

                <div className="form_input_container">
                    <input required className="form_input_box" id="last_name" name="last_name" placeholder="Last Name" />
                </div>

                <div className="form_input_container">
                    <input required className="form_input_box form_input_box_email" id="email_address" name="email_address" placeholder="Email address" />
                </div>

                <div className="form_input_container">
                    <input required className="form_input_box" id="phone_number" name="phone_number" placeholder="Phone number" />
                </div>

                <div className="form_submit_container">
                    <button type="submit" className="submit_btn">Submit</button>
                </div>

            </form>
        </div>
    </div>

    <div className="info_box">
        <div className="info_box_text">
        Don't Miss Out. Enquire Today and Schedule Your Site Visit.
        </div>

        <div className="info_box_number">
            <div className="info_box_number_text">
                Call 1234567890
            </div>
        </div>
    </div>
    </div>
  );
};

export default CoreStrength;
