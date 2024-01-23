/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Form from './components/sections/reservePages/Form';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
      <Route path="reserve" element={<Form />} />
    </Routes>
  </BrowserRouter>
);

export default App;
