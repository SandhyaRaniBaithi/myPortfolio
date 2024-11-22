import React from 'react';
import './intro.css';
import bg from '../../assets/img-2 1.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sandhya</span><br/>Web Developer</span>
            <p className='introPara'>I am a skilled web developer with experience in creating<br/> visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='btn image' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='portfolio' className='bg'/>
        </section>
  )
}

export default Intro;
