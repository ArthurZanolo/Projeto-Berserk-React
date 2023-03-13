import './App.css';
import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentários from './pages/comentários/comentarios';

function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentários />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
