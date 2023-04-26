import React from 'react';
import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id="login">
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>7 E 85TH ST NEW YORK NY 10028-0439 USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-6893</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.name} alt="logo" className='footer-img' />
        <p className='p__opensans'>"Bringing people together, one plate at a time" </p>
        <img src={images.spoon} alt="" style={{marginTop:15}} />
        <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        < FiInstagram />
        </div>

      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday : 11:00 am - 22:00 pm</p>
        <p className='p__opensans'>Saturday - Sunday : 10:00 am - 23:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
