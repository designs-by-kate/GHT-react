import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin} from "lucide-react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Basic form validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message) before sending.');
      return;
    }

    emailjs
      .sendForm('service_syw1zis', 'template_5g1djlf', form.current, {
        publicKey: 'OaJqMMFzpoPFoGtMd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear input fields and text area
          form.current.reset();
          // Display success pop-up message
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Display failure alert
          alert('Unable to send email. Please try again or use the provided email links.');
        },
      );
  };

  return (
    <div id="contact" className="text-white bg-gradient-to-r from-gray-800 to-blue-300 py-24 px-6 flex flex-col md:flex-row justify-around items-center">
    <div className="text mb-6 md:mb-0">
      <h2 className="text-4xl font-semibold tracking-wide mb-4">Contact</h2>
      <p className="text-lg font-normal mb-8">Feel free to reach out!</p>
      <ul className="links flex flex-row gap-4">
        <li className="link flex items-center gap-4">
          <a href="mailto:gp.eng@onet.eu"><Mail /></a>
        </li>
        <li className="link flex items-center gap-4">
          <a href="https://www.linkedin.com/in/grzegorz-pospiech-91063074/"><Linkedin /></a>
        </li>
      </ul>
    </div>
    <div className="contactForm md:w-1/3">
      <form ref={form} onSubmit={sendEmail}>
        <label className="block mb-1">Name</label>
        <input type="text" name="user_name" className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <label className="block mb-1 mt-4">Email</label>
        <input type="email" name="user_email" className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <label className="block mb-1 mt-4">Message</label>
        <textarea name="message" className="w-full py-2 px-4 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
        <input type="submit" value="Send" className="mt-6 py-2 px-4 bg-blue-500 text-black rounded cursor-pointer hover:bg-blue-700" />
      </form>
    </div> 
  </div>
  );
};

export default Contact