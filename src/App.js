import React from 'react';
// import Header from './component/Header';
// import Hero from './component/Hero';
// import About from './component/Pages/About';
import { Route, Routes } from "react-router-dom"
import Home from './component/Pages/Home';



// import components

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
  // return <div>
  //   <Header />
  //   <Hero />
  //   <div style={{height: '1000px'}}></div>
  // </div>;
};

export default App;
