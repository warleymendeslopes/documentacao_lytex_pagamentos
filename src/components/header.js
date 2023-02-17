import { slide as Menu } from 'react-burger-menu'

import { Link, useNavigate, useLocation } from "react-router-dom";
import React from 'react';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '24px',
    right: '10px',
    top: '25px'
  },
  bmBurgerBars: {
    background: 'rgb(255 255 255)',
    BorderRadius: '2px',
    height: '7%'
  },
  
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100vh',
    left: '0',
    top: '-1px'
  },
  bmMenu: {
    background: 'rgb(11 38 64)',
    padding: '2.5em 25px 0px 10px',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'rgb(255 255 255)',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column'
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Ubuntu',
    lineHeight: '50px'
  },
  bmOverlay: {
    width: 'auto',
    background: 'rgb(0 76 255 / 35%)',
    left: '0',
    top: '-1px',
    height: '100vh'
  }
}

export default function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  function onChange(e){
    console.log("Ok")
   const valueVersion =  e.target.value ;
    navigate(valueVersion);
  }

  return (
      <div className='header-doc-lytex'>

        <div className='container content-nav-menu'>
          <div className='row row-nav-menu'>
              <div className='nav-menu-mobile'>
                <Menu  styles={ styles }>
                  <a className="menu-item" href="/">Home</a>
                  <a className="menu-item" href="/introducao-ao-sistema#section/Cadastro">Introdução ao Sistema</a>
                  <a className="menu-item" href="/documentacao">Documentação</a>
                </Menu>
              </div>
                <div className='col-2 logo-lytex'><img src="/logo_02.png" className="lytex-logo" alt="logo" /></div>
                <div className='col-7 nav-menu-lytex'>
                  <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/introducao-ao-sistema#section/Cadastro">Introdução ao Sistema</Link></li>

                    <li><Link to="/documentacao/v2">Documentação</Link></li>

                  </ul>
                </div>
                <div className='col-3 cta-login'>
                  <a className='cta-login-doc fundo-white' href="https://pay.lytex.com.br/auth/login">Login de sistema</a>
                  <a className='cta-login-doc' href="https://pay.lytex.com.br/auth/login">Login Sandbox</a>


                </div>
          </div>
        </div>


        <div className="container-version">
          {location.startsWith("/documentacao/") === true &&
              <select name="Documentacao" onChange={onChange.bind()} id="Document">
                <option value="/documentacao/v2">Versão 2</option>
                <option value="/documentacao/v1">Versão 1</option>
              </select>
          }
        </div>

        <style jsx>{`
          .container-version {
            position: absolute;
            top: 100%;
            right: 15px;
          }

          select#Document {
            background: #ffffff;
            color: #000000;
            border: none;
            font-weight: 700;
            font-size: 12px;
          }

          span.bm-burger-bars:nth-child(1) {
            width: 100% !important;
          }
          
          span.bm-burger-bars:nth-child(2) {
            width: 70% !important;
            left: calc(100% - 70%) !important;
          }

          span.bm-burger-bars:nth-child(3) {
            width: 45% !important;
            left: calc(100% - 45%) !important;
          }
          .nav-menu-mobile {
            display: none;
          }

          .container.content-nav-menu {
            padding: 12px 0px 12px 0px;
          }
          
          .header-doc-lytex {
            position: sticky;
            background: #004CFF;
            top: 0;
            width: 100%;
            z-index: 9999999;
            filter: drop-shadow(6px 4px 1px rgba(255, 255, 255, 0.12));
            border-bottom: 1px solid white;
          }
          .nav-menu-lytex ul {
            padding-inline-start: 0px;
            display: flex;
          }

          .nav-menu-lytex ul li {
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

          .cta-login-doc.fundo-white {

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

            .col-7.nav-menu-lytex {
              display: none;
            }

            .nav-menu-mobile {
              display: block;
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

          @media (max-width: 600px) {


            .col-2.logo-lytex {
              flex: 0 0 auto;
              width: 36.666667%;
            }
            .container.content-nav-menu {
              padding-right: calc(var(--bs-gutter-x) * .5);
              padding-left: calc(var(--bs-gutter-x) * .5);
            }
            .col-3.cta-login {
              display: none;
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
