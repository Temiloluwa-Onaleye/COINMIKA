import React from 'react';
import './HeroSection.css';
import {Link} from 'react-router-dom';
import { Button } from '../../components/Button';


function HeroSection({purpleBg, darkText, darkTextDesc, headline, description, buttonLabel, img, alt, imgStart}) {
  return(
<>
<div className={purpleBg ? 'home__hero-section' : 'home__section lightBg'}>
<div className='hero-section__container'>
    <div className='row home__hero-row' style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}} >
<div className='hero-section__col'>
<div className='home__hero-text-wrapper'>
    <h1 className={darkText ? 'heading' : 'heading light'}>{headline}</h1>
    <p className={darkTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle light'}>{description}</p>
    <Link to='/'>
    <Button buttonSize='btn--medium' buttonColor='red'>
        {buttonLabel}
    </Button>
    </Link>
    <div>
    <img src='images/Group 979.svg'  alt='' className='flex'/>
    <img src='images/Group 982.svg' alt=''/>
    </div>
   
    
</div>
</div>
<div className='hero-section__col'>
<div className='home__img-wrapper'>
<img src={img} alt={alt} className='home__hero-img' />
</div>
</div>
    </div>
</div>
</div>
</>
  ) 
}

export default HeroSection;
