import React from 'react';
import './styles.css';
import Logo from '../assets/Logo.png'

function Footer(){
  return (
    <div>
        <footer>
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Arthur Zanolo</span>
    
            <nav class="footer-navigation">
                <ul class="footer-list">
                    <a href="index.html">
                        <li>Home</li>
                    </a>
    
                    <a href="contato.html">
                        <li>Contato</li>
                    </a>
    
                    <a href="fotos.html">
                        <li>Fotos</li>
                    </a>
    
                    <a href="comentarios.html">
                        <li>Comentários</li>
                    </a>
    
                </ul>
            </nav>
        </footer>
    </div>
  );
}

export default Footer;