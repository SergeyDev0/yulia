import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Contacts from './pages/contacts';
import Catalog from './pages/catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/catalog' element={ <Catalog /> } />
        <Route path='/contacts' element={ <Contacts /> } />
        <Route path='/:id' element={ <Product /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
