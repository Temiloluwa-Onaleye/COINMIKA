import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
            <h2 className='footer__logo' >CoinMika</h2>
            
          <div className='footer-link-items'>
            <h2>PRODUCT</h2>
            <h2>SUPPORT</h2>
            <h2>NEWS</h2>
            <h2>COMPANY</h2>
            <h2>CONTACTS</h2>
            <h2>ASSETS</h2>
            <h2>INFORMATION</h2>
          </div>
      </div>
      <div className='social__media'>
          <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
          
        </div>
      </div>
    
  );
}

export default Footer;