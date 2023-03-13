import React from 'react';
import Header from '../../components/Header/header';
import './styles.css'
import Video from '../../components/assets/VideoBerserk.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';

function Home(){
  return (
    <>
      <Header />
      <div id='banner'></div>
      <div id='trailer-container'>
        <div className='content'>
            <video controls className='trailer'>
              <source src={Video} />
              Seu navegador não possuí suporte para vídeos.
            </video>
            <div id='sinopse'>
              <p className='description'>O misterioso Guts, o “Espadachim Negro”, carrega em sua mão mecânica uma enorme espada, e em seu pescoço uma estranha marca que atrai forças demoníacas. Em sua busca por vingança contra um antigo inimigo, nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica criatura.</p>
              <button className='button'>Assistir</button>
        </div>
       </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;