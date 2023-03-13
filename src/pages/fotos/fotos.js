import React from 'react';
import Header from '../../components/Header/header';
import './styles.css'
import Footer from '../../components/footer/footer';

function Fotos(){
  return (
    <>
    <Header />
      <div className='fotos-container'>
        <div className='fotos'>
            <div className="space foto-1"></div>
            <div className="space foto-2"></div>
            <div className="space foto-3"></div>
            <div className="space foto-4"></div>
            <div className="space foto-5"></div>
            <div className="space foto-6"></div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Fotos;