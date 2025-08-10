import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Feature from './Feature';
import AboutFeaturesSection from './AboutFeaturesSection';
import SalesPromotion from './SalesPromotion';


const Home = () => {
    return (
<div >
<Banner></Banner>
<Feature></Feature>
<AboutFeaturesSection></AboutFeaturesSection>
 <SalesPromotion></SalesPromotion>
<Faq></Faq>
        </div>
    );
};

export default Home;