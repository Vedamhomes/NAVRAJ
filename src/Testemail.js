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
   <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" name="first_name"  required/>
    <label>Last Name</label>
      <input type="text" name="last_name"  required/>
      <label>Email</label>
      <input type="email" name="email_address" required/>
    <label>Phone number</label>
      <input type="number" name="phone_number"  required/>
      <label>Property location</label>
      <input  type="text" name="property_location" required/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Testemail;
