import React from 'react';
import './styles.css';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';

function Contato(){
  return (
    <>
      <Header />
        <div className='contatos-container'>
           <div id="content">
              <form>
              <label className='label-email' for="email">Email:</label>
              <input type="email" name="email" id="email" placeholder=" Digite seu email"></input>
              <textarea name="comentario" id="comentario" cols="30" rows="12" placeholder=" Qual o motivo de seu contato?"></textarea>
              </form>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default Contato;