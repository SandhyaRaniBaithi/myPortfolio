import React from 'react'
import './works.css';

import Portfolios1 from '../../assets/skills/html.png';
import Portfolios2 from '../../assets/skills/css.png';
import Portfolios3 from '../../assets/skills/react.png';
import Portfolios4 from '../../assets/skills/node.png';
import Portfolios5 from '../../assets/skills/mongodb.png';
import Portfolios6 from '../../assets/skills/figma.png';

const Works = () => {

return (

<section id='works'>
      <h2 className='worktitle'>My portfolio</h2>
      <span className='workDesc'>Proficient in front-end and back-end development, I excel in HTML, CSS, JavaScript, React.js, Node.js, and database management with MongoDB and MySQL. Additionally, I have experience using Figma to design intuitive and visually appealing user interfaces.</span>
      <div className='worksImgs'>
        <img src={Portfolios1} className='worksImg'/>
        <img src={Portfolios2} className='worksImg'/>
        <img src={Portfolios3} className='worksImg'/>
        <img src={Portfolios4} className='worksImg'/>
        <img src={Portfolios5} className='worksImg'/>
        <img src={Portfolios6} className='worksImg'/>
      </div>
      <div id='project'>
            <h1 className='projectPageTitle'>My Projects</h1>
            <p className='projectDesc'>I specialize in creating dynamic and user-friendly web solutions, blending design with functionality. My projects, including the Amazon Clone and Facebook Clone, demonstrate expertise in crafting responsive e-commerce platforms and social media layouts. Leveraging technologies like HTML, CSS, JavaScript, and Bootstrap, I deliver seamless front-end and back-end integration. My work reflects a strong commitment to modern design and intuitive user experiences.</p>
        </div>
</section>
)
} 
export default Works;