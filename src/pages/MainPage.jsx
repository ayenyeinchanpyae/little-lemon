/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from '../container';
import { Navbar } from '../components';

const MainPage = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs /> */}
    <SpecialMenu />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default MainPage;
