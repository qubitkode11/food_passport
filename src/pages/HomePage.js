import React from 'react';
import HeroSlider     from '../components/HeroSlider';
import StatsBar       from '../components/StatsBar';
import OurStory       from '../components/OurStory';
import Services       from '../components/Services';
import LabellingServices from '../components/LabellingServices';
import Customers      from '../components/Customers';
import Categories     from '../components/Categories';
import Logistics      from '../components/Logistics';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <div className="relative -mt-24 z-30 pb-24">
        <StatsBar />
      </div>
      <OurStory />
      <Services />
      <Categories />
      <LabellingServices />
      <Customers />
      <Logistics />
    </>
  );
};

export default HomePage;
