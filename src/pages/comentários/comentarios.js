import React from 'react';
import './styles.css'
import Guts from '/Users/arthu/Desktop/Curso Profissão/Projetos/primeiraaap/src/components/assets/guts.jpg'
import Griffith from '/Users/arthu/Desktop/Curso Profissão/Projetos/primeiraaap/src/components/assets/griffith.jpg'
import Casca from '/Users/arthu/Desktop/Curso Profissão/Projetos/primeiraaap/src/components/assets/casca.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';

function Comentários(){
  return (
  <>
  <Header/>
  <div className="comentarios-container">
              <div className="comentarios">
                 <div className="space1">
                     <img className="imagem1" src={Guts} />
                     <span className="span-text"> "Se você busca muito alguma coisa, é certo que deixará outras no meio do caminho. Só me sinto vivo quando estou usando a minha espada. Humanos são fracos e morrem facilmente. Mas não importa o quão fracos somos, não importa o quanto somos torturados, não importa quanta dor sentimos, nós ainda queremos viver."</span>
                      <span className="cguts"> - Guts</span>
    
                  </div>
                 <div className="space2">
                 <img className="imagem2" src={Griffith} />
                  <span className="span-text"> "Todos se deixam levar pela correnteza daquilo chamado destino ou coisa parecida, para no final desaparecerem do mundo, desperdiçando suas vidas, sem ao menos descobrirem o significado de suas existências."</span>
                  <span className="cgriffith"> - Griffith</span>
                  </div>             
                  <div className="space3">
                      <img className="imagem3" src={Casca} />
                      <span className="span-text"> "Naquele dia, eu finalmente percebi. Eu não conseguia desviar meus olhos, não de Griffith, que havia perdido pela primeira vez e estava de joelhos; mas sim das costas do Guts, que se afastava sem sequer olhar para trás."</span>
                     <span className="ccasca"> - Casca</span>
                 </div>
              </div>
        </div>
  <Footer/>
    </>
  );
}

export default Comentários;