import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Blog from './components/blog';
import Needles from './components/needles';
import Item from './components/item';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/yarn" element={<Main />} />
        <Route path="/needles" element={<Needles />} />
        <Route path="/" element={<Main />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
