import React from 'react';
import './Body.css';
import {Link} from 'react-router-dom';
import { Button } from '../../components/Button';


function Body({purpleBg, darkText, darkTextDesc, headline, description, buttonLabel, img, alt, imgStart}) {
  return(
<>
<div className={purpleBg ? 'home__body' : 'body__section lightBg'}>
<div className='body-section__container'>
    <div className='body__hero-row' style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}} >
<div className='body-section__col'>
<div className='body__hero-text-wrapper'>
    <h1 className={darkText ? 'heading' : 'heading light'}>{headline}</h1>
    <p className={darkTextDesc ? 'body__hero-subtitle' : 'body__hero-subtitle light'}>{description}</p>
    <Link to='/'>
    <Button buttonSize='btn--wide' buttonColor='purple'>
        {buttonLabel}
    </Button>
    </Link>

   
    
</div>
</div>
<div className='body-section__col'>
<div className='body__img-wrapper'>
<img src={img} alt={alt} className='body__hero-img' />
</div>
</div>
    </div>
</div>
</div>
</>
  ) 
}

export default Body;
