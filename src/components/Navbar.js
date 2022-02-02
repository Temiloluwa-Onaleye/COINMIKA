import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import {  IconContext } from 'react-icons/lib';
import { NavDropdown } from 'react-bootstrap';


function Navbar() {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

const closeMobileMenu = () => setClick(false)


  return (
  <>
  <IconContext.Provider value={{color:'#7E45E9' }}>
    <nav className='navBar'>
        <div className='navbar__container'>
            <Link to='/'className="navbar-logo" onClick={closeMobileMenu} >
                <img src='images/logo.svg' alt='Coinmeka' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars/>}
            </div>
        <ul className={click ? 'nav__menu nav__active' : 'nav__menu'}>
            <li className='nav__item'>
            
                <NavDropdown title="Product" className='nav-menu active nav__links'>
        <NavDropdown.Item eventKey="">Multi crypto wallet</NavDropdown.Item>
        <NavDropdown.Item eventKey="">Buy Crypto</NavDropdown.Item>
        <NavDropdown.Item eventKey="">Sell Crypto</NavDropdown.Item>
        <NavDropdown.Item eventKey="">P2P</NavDropdown.Item>
        <NavDropdown.Item eventKey="">Swap</NavDropdown.Item>
      </NavDropdown>
            </li>
            <li className='nav__item'>
                <Link to='/contact' className='nav__links'>
                    Contact
                </Link>
            </li>
            <li className='nav__item'>
                <Link to='/FAQ' className='nav__links'>
                    FAQ
                </Link>
            </li>
            <li className='nav__item'>
                <Link to='/Youtube' className='nav__links'>
                    Youtube
                </Link>
            </li>
            <li className='nav__item'>
                <Link to='/whitepaper' className='nav__links'>
                    Whitepaper
                </Link>
            </li>
        </ul>
        </div>
    </nav>
    </IconContext.Provider>
  </>
  )
}

export default Navbar;
