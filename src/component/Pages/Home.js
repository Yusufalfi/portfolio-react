import React from 'react'
import About from '../About';
import BackToTop from '../BackToTop';
import Footer from '../Footer';
import Header from '../Header';
import Hero from '../Hero';
import Portfolio from '../Portfolio';
// import Services from '../Services';
import Skills from '../Skills';
import Testimonials from '../Testimonials';

const Home = () => {
   return <div>
        <Header />
        <Hero />
        <Skills />
        <About />
        <Portfolio />
        <Testimonials />
        <Footer />
        <BackToTop />
        {/* <Services /> */}
        {/* <div style={{height: '1000px'}}></div> */}
    </div>;
}

export default Home