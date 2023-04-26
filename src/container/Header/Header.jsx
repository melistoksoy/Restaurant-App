import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">

  <div className='app__wrapper_info'>
    <SubHeading  title="Savor Every Bite"/>
    <h1 className='app__header-h1'>A Place Where Foodies Gather</h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Placeat minima id enim doloremque modi eligendi perspiciatis repellendus iste natus.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
  </div>
  <div className='app__wrapper_img'>
   <img src={images.welcome} alt="header img" />
  </div>
  </div>
);

export default Header;
