import React, { useState, useEffect } from 'react';
import './header.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from './logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [menuVisible, setMenuVisible] = useState(window.innerWidth < 1325);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMenuVisible(window.innerWidth < 1325);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleHamburgerClick = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div>
      {menuVisible ? (
         <section className="p-menu1">
         <nav id="navbar" className="navigation" role="navigation">
           <input id="toggle1" type="checkbox" />
           <label className="hamburger1" htmlFor="toggle1">
             <div className="top"></div>
             <div className="meat"></div>
             <div className="bottom"></div>
           </label>
         
           <nav className="menu1">
             <a className="link1" href="#Page4">Profils</a>
             <a className="link1" href="#Page6">Challenge</a>
             <a className="link1" href="#Page7">Intervenants</a>
             <a className="link1" href="#Page8">Informations Pratiques</a>
             <a className="link1 kbutton-nav" href="#Page11">FAQ</a>
           </nav>
         </nav>
       </section>
      ) : (
        <div className="button-container">
          <a href="#Page4">
            <button className="custom-button1">Profils</button>
          </a>
          <a href="#Page6">
            <button className="custom-button2">Challenge</button>
          </a>
          <a href="#Page7">
            <button className="custom-button3">Intervenants</button>
          </a>
          <a href="#Page8">
            <button className="custom-button4">Informations Pratiques</button>
          </a>
          <a href="#Page11">
            <button className="custom-button5">FAQ</button>
          </a>
        </div>
      )}
    </div>
  );
}


export default Header;
