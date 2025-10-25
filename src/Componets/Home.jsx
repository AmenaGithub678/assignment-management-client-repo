import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Feature from './Feature';
import AboutFeaturesSection from './AboutFeaturesSection';
import SalesPromotion from './SalesPromotion';
import TestimonialSection from './TestimonialSection';


const Home = () => {
    return (
<div >
<Banner></Banner>
<Feature></Feature>
<AboutFeaturesSection></AboutFeaturesSection>
<TestimonialSection></TestimonialSection>
 <SalesPromotion></SalesPromotion>
<Faq></Faq>
        </div>
    );
};

export default Home;