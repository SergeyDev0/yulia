import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/:id' element={ <Product /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
