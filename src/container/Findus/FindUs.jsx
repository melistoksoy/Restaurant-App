import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
  <div className='app__wrapper_info'>
    <SubHeading title='Contact'/>
    <h1 className='headtext__cormorant'>Find Us</h1>
    <div className='app__wrapper-content'>
    <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Placeat minima id enim doloremque modi eligendi perspiciatis repellendus iste natus.</p>
    </div>
  
    <button type='button' className='custom__button'>Find Us</button>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.findus} alt="find-us" />
  </div>
  </div>
);

export default FindUs;
