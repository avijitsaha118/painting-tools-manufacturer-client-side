import React from 'react';
import Awards from '../Awards/Awards';
import Features from '../Features/Features';
import Reviews from '../Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import SelectedTools from './SelectedTools';

const Home = () => {
    return (
        <>
       <Banner></Banner>
       <SelectedTools></SelectedTools>
       <BusinessSummary></BusinessSummary>
       <Reviews></Reviews>
       <Features></Features>
       <Awards></Awards>
    
       
       </>
    );
};

export default Home;