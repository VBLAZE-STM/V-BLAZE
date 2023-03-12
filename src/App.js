import React, { useEffect, useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/footer';
import Experience from './components/experience';
import Sidebar from './components/sidebar';
import Teams from "./components/team";
const App = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Sidebar/>
      <Nav visible={visible}/>
      <About />
      <Experience/>
      <Services />
      <Work />
      <Teams/>
      <Contact />
      <Footer/>
       {/* <div className='h-[3500px]'></div> */}
    </div>
  );
};

export default App;
