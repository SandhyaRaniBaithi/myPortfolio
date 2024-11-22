import React ,{useRef} from 'react'

import './Contact.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_binmahi', 'template_m165vdt', form.current, 'eB9618qgz_3i9ioL8t5GH')
    //   .then((result) => {
    //       console.log(result.text);
    //       e.target.reset();
    //     },(error) => {
    //       console.log(error.text);
    //     });
    // };

    emailjs
    .sendForm('service_binmahi', 'template_orh2foo', form.current, {
      publicKey: 'ec_zoND8rN9xa4ARD',
    })
    .then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <section className='contactPage'>
         
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Pleace fill out the form below to discuss any opportunities.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}> 
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your Email'  name='your_email'/>
            <textarea className='msg' name='massage' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={FacebookIcon} alt='FacebookIcon' className='link'/>
              <img src={TwitterIcon} alt='TwitterIcon' className='link'/>
              <img src={YouTubeIcon} alt='YouTubeIcon' className='link'/>
              <img src={InstagramIcon} alt='InstagramIcon' className='link'/>
            </div>
          </form>
          </div>  
    </section>
  )
}

export default Contact

