import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/S.png'
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <div className="navbar">
        <img src={logo} alt="LOGO"  className='logo' />
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link className='desktopMenuListItem'  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
          <Link className='desktopMenuListItem' activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
          <Link className='desktopMenuListItem' activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500}>Mywork</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
            <img src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me
        </button>

        <img src={menu} alt="Menu"  className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
          <Link className='ListItem'onClick={()=>setShowMenu(false)} activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link className='ListItem'onClick={()=>setShowMenu(false)} activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
          <Link className='ListItem'onClick={()=>setShowMenu(false)} activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
          <Link className='ListItem'onClick={()=>setShowMenu(false)} activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}>Mywork</Link>
          <Link className='ListItem'onClick={()=>setShowMenu(false)} activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </div>
    </div>
  );
}

export default Navbar;
