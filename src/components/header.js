
import logo from './logo-lytex.svg';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';


function Header() {
  //const [count, setCount] = useState(0);
  useEffect(() => {
    window.onload = function(e) {
  
      var offset = document.getElementsByClassName('header-doc-lytex')[0].offsetTop;
      var menu = document.getElementsByClassName('header-doc-lytex')[0];
    
      document.addEventListener('scroll', function() {
          if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
              menu.style.position = 'fixed';
          } else {
              menu.style.position = 'initial';
          }
      });
    }
});


  return (
      <div className='header-doc-lytex'>
        <div className='container content-nav-menu'>
          <div className='row row-nav-menu'>
                <div className='col-2 logo-lytex'><img src={logo} className="lytex-logo" alt="logo" /></div>
                <div className='col-7 nav-menu-lytex'>
                  <ul>
                    <li><Link to="/">Conheça a LyTex Pagamentos</Link></li>
                    <li><Link to="/documentacao">Documentação</Link></li>
                    <li><Link to="/introducao-ao-sistema#section/Cadastro">Introdução ao Sistema</Link></li>
                    <li><Link to="/documentacao">Integrações</Link></li>
                  </ul>
                </div>
                <div className='col-3 cta-login'>
                  <a className='cta-login-doc fundo-white' href="https://pay.lytex.com.br/auth/login">Login de sistema</a>
                  <a className='cta-login-doc' href="https://pay.lytex.com.br/auth/login">Login Sandbox</a>
                </div>
          </div>


        </div>
        {
        //teste() 
        }

        <style jsx>{`
          .container.content-nav-menu {
            padding: 12px 0px 12px 0px;
          }
          .header-doc-lytex {
            background: #004CFF;
            top: 0;
            width: 100%;
            z-index: 9999999;
            filter: drop-shadow(6px 4px 1px rgba(255, 255, 255, 0.12));
          }
          .nav-menu-lytex ul {
            padding-inline-start: 0px;
            display: flex;
          }
          .nav-menu-lytex ul li{
            list-style-type: none;
            padding-left: 19px;
          }
          .nav-menu-lytex ul li a {
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
            text-decoration: none;
            
          }
          .cta-login-doc {
            padding: 9px 10px;
            border: 2px solid #FFFFFF;
            border-radius: 8px;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 150%;
            color: #FFFFFF;
            text-decoration: none;
          }
          .cta-login-doc.fundo-white{
            background: #FFFFFF;
            color: #004CFF;
            margin-right: 14px;
          }
          .cta-login {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          @media only screen and (max-width: 1401px) {

          }
      
          @media only screen and (max-width: 960px) {
            .col-7.nav-menu-lytex{
              display:none;
            }
            .row.row-nav-menu {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .col-3.cta-login {
              width: 406px;
            }
                  
          }
      
          @media (max-width: 600px){
              .col-3.cta-login {
                display:none;
              }
              .col-7.nav-menu-lytex {
                display: none;
                position: absolute;
                background: #0031a5;
                width: 70%;
                height: 100vh;
                z-index: 9999999999;
                top: 0;
                left: 0;
            }
            .nav-menu-lytex ul {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-top: 117px;
            }
          }

        `}</style>
      </div>
  );
}

export default Header;


/*

<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/