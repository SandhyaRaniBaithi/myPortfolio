import React, { useRef } from 'react';
import './Contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_binmahi',
        'template_orh2foo',
        form.current,
        'ec_zoND8rN9xa4ARD' 
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          e.target.reset();
        },
        (error) => {
          console.log('Email sending failed:', error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
        <div className="links">
          <img src={FacebookIcon} alt="Facebook Icon" className="link" />
          <img src={TwitterIcon} alt="Twitter Icon" className="link" />
          <img src={YouTubeIcon} alt="YouTube Icon" className="link" />
          <img src={InstagramIcon} alt="Instagram Icon" className="link" />
        </div>
      </div>
    </section>
  );
};

export default Contact;