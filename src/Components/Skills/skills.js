import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'; 


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with expertise in creating visually appealing and user-friendly websites. With a strong understanding of design and an eye for detail, I specialize in HTML, CSS, JavaScript, React.js, MongoDB, and Figma. My goal is to craft seamless digital experiences for users.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I am a passionate UI/UX designer skilled in creating visually engaging and user-friendly designs using HTML, CSS, and Bootstrap. I craft responsive layouts for businesses, blending aesthetics with functionality. Occasionally, I use Figma to design intuitive prototypes, ensuring seamless user experiences.</p>
                </div>
            </div>
                <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I create clean, responsive, and visually appealing web designs that deliver seamless user experiences across all devices. From simple landing pages to complex web applications, I focus on intuitive and engaging UI. Leveraging technologies like HTML, CSS, Bootstrap, and React.js, I bring ideas to life with precision and creativity</p>
                </div> 
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Full Stack Developer</h2>
                    <p>Delivering end-to-end full-stack solutions, I specialize in crafting seamless, responsive applications using React.js, Node.js, and Express.js. From intuitive front-end designs to robust back-end architecture, I ensure every project is fully functional and scalable. My expertise in database management guarantees reliable and efficient performance for your application.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills


