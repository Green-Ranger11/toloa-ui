import React from 'react';

import HeroHome from '../components/HeroHome';
import FeaturesHome from '../components/Features';
import FeaturesBlocks from '../components/FeaturesBlocks';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <>

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </>
  );
}

export default Home;