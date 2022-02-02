import React from 'react';
import CryptoAssets from './CryptoAssets';
import CustomerReview from './CustomerReview';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive} from './Data'
import Faq from './Faq';
import HeroSection from './HeroSection';
import Body from './Body';
import SecondBody from './SecondBody';

function Home() {
  return (
  <>
<HeroSection {...homeObjOne} />
<Body {...homeObjTwo} />
<SecondBody {...homeObjThree} />
<SecondBody {...homeObjFour} />
<SecondBody {...homeObjFive} />
<CryptoAssets/>
<CustomerReview/>
<Faq/>
  </>
  )
}

export default Home;
