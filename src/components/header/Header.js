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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              padding="0"
              margin="50"
              className="d-inline-block align-top"
            />
            HAKS 2024
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"        >
            <FontAwesomeIcon icon={isHamburgerOpen ? faTimes : faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className={isHamburgerOpen ? 'show' : ''}>
            <Nav className="mr-auto">
              <NavDropdown  id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#Page4">Profils</NavDropdown.Item>
                <NavDropdown.Item href="#Page6">Challenge</NavDropdown.Item>
                <NavDropdown.Item href="#Page7">Intervenants</NavDropdown.Item>
                <NavDropdown.Item href="#Page8">Informations Pratiques</NavDropdown.Item>
                <NavDropdown.Item href="#Page11">FAQ</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
