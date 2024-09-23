import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

const Testemail = () => {
  const [phoneNumber] = useState('+91');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   const form_one = e.target;

    const formData = new FormData(form_one);

    const formObject = Object.fromEntries(formData.entries());

    const { property_location, first_name, last_name, email_address, phone_number } = formObject;
    console.log('phoneNumber.length()', phoneNumber.length)
    if(phoneNumber.length < 13){
      return ;
    }
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
          console.log(error);
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
      <input type="tel" name="phone_number" value={phoneNumber}  required/>
      <label>Property location</label>
      <input  type="text" name="property_location" required/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Testemail;
