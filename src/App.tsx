import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import MobileNavbar from './components/MobileNavbar';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';

const App:React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/products/search/:searchValue' element={<Search/>} />
      </Routes>
      <MobileNavbar/>
    </Router>
  );
}

export default App;
