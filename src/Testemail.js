import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

const Testemail = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
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
  
  const isRepeatingDigits = (number) => {
    return new Set(number).size <= 3;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log('value', value);
    
    let formattedValue = value;
    
    if (value.startsWith('+91')) {
      formattedValue = value.substring(3);
    }else{
      formattedValue = ''
    }
    
    formattedValue = formattedValue.replace(/\s+/g, '');
    
    if (formattedValue.length <= 10) {
      if (formattedValue.length >= 8 && isRepeatingDigits(formattedValue)) {
        return;
      }
      setPhoneNumber('+91' + formattedValue);
    } else {
      console.warn('Phone number is too long');
    }
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
      <input type="tel" name="phone_number" value={phoneNumber}  onChange={handleChange} required/>
      <label>Property location</label>
      <input  type="text" name="property_location" required/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Testemail;
