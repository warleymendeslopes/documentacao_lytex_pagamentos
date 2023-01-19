
import logo from './logo-lytex.svg';
import { Link } from "react-router-dom";


function Header() {
  return (
      <div className='header-doc-lytex'>
        <div className='container content-nav-menu'>
          <div className='row'>
                <div className='col-lg-2 logo-lytex'><img src={logo} className="lytex-logo" alt="logo" /></div>
                <div className='col-lg-6 nav-menu-lytex'>
                  <ul>
                    <li><Link to="/">Conheça a LyTex Pagamentos</Link></li>
                    <li><Link to="/documentacao">Documentação</Link></li>
                    <li><Link to="/introducao-ao-sistema#section/Cadastro">Introdução ao Sistema</Link></li>
                    <li><Link to="/documentacao">Integrações</Link></li>
                  </ul>
                </div>
                <div className='col-lg-4 cta-login'>
                  <a className='cta-login-doc fundo-white' href="https://pay.lytex.com.br/auth/login">Login de sistema</a>
                  <a className='cta-login-doc' href="https://pay.lytex.com.br/auth/login">Login Sandbox</a>
                </div>
          </div>


        </div>
            

        <style jsx>{`
          .container.content-nav-menu {
            padding: 12px 0px 12px 0px;
          }
          .header-doc-lytex {
            background: #004CFF;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 9999999;
            filter: drop-shadow(6px 4px 1px rgba(255, 255, 255, 0.12));
          }
          .nav-menu-lytex ul {
            padding-inline-start: 0px;
            display: flex;
            justify-content: space-between;
          }
          .nav-menu-lytex ul li{
            list-style-type: none;
          }
          .nav-menu-lytex ul li a {
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
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
            font-size: 16px;
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

        `}</style>
      </div>
  );
}

export default Header;


/*

<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/