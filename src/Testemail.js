import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Testemail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!..');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <form ref={form} className="input_form" onSubmit={handleSubmit}>
          <div className="form_input_container">
            <label className="form_input_label" htmlFor="property_location">Property Location</label>
            <select
              name="property_location"
              id="property_location"
              className="form_input_box"
              required
              title="* Property Location"
            >
              <option value="">Select Property Location</option>
             { /*  <option data-ref="faridabad" data-belong="" value="faridabad">
                Faridabad
              </option> */}
              <option data-ref="gurugram" data-belong="" value="gurugram">
                Gurugram
              </option>
            </select>
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form_input_box"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form_input_box"
              id="last_name"
              name="last_name"
              placeholder="Last name"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="email_address">Email Address</label>
            <input
              type="email"
              className="form_input_box form_input_box_email"
              id="email_address"
              name="email_address"
              placeholder="Email address"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              className="form_input_box"
              id="phone_number"
              name="phone_number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={handleChange}
              // onBlur={handleBlur}
              required
            />
          </div>

          <div className="form_submit_container">
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </div>
        </form>
  );
};

export default Testemail;
