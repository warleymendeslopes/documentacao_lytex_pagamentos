
import logo from './logo-lytex.svg';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header-doc-lytex'>
      <div className='content-nav-menu'>
          <div className='logo-lytex'>
            <img src={logo} className="lytex-logo" alt="logo" />
          </div>
          <div className='nav-menu-lytex'>
            <ul>
              <li><Link to="/">Lytex Pagamentos</Link></li>
              <li><Link to="/documentacao">Documentação</Link></li>
              <li><Link to="/dashboard">Tutoriais</Link></li>
              <li><Link to="/nothing-here">Login</Link></li>
            </ul>
          </div>
      </div>
          

      <style jsx>{`
        .header-doc-lytex {
            background: #004cff;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .content-nav-menu {
            display: flex;
            justify-content: space-between;
            padding-left: 14px;
            padding-right: 14px;
        }
        .nav-menu-lytex ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        
        .nav-menu-lytex {
            width: 50%;
        }
        
        .nav-menu-lytex ul li {
            list-style-type: none;
        }
        
        .nav-menu-lytex ul li a {
            color: white;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
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