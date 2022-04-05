import React from 'react';

import HeroHome from '../components/partials/HeroHome';
import FeaturesHome from '../components/partials/Features';
import FeaturesBlocks from '../components/partials/FeaturesBlocks';
import Testimonials from '../components/partials/Testimonials';
import Newsletter from '../components/partials/Newsletter';
import Footer from '../components/partials/Footer';

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