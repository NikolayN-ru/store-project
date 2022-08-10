import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Needles from './pages/Needles/Needles';
import Product from './pages/Product/Product';
import Wares from './pages/Wares/Wares';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/yarn" element={<Main />} />
        <Route path="/needles" element={<Needles />} />
        <Route path="/product" element={<Wares />} />
        <Route path="/" element={<Main />} />
        <Route path="/item/:itemId" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
