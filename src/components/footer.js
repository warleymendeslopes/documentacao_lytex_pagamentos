
import logo from './logo-lytex.svg';



function Footer() {
  return (
      <div className='footer-doc-lytex'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 d-flex align-items-center justify-content-center'>
                    <div className='footer-logo-lytex'><img src={logo} className="lytex-logo" alt="logo" /></div>
                    <div className='footer-social-midia'></div>
                </div>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Navegação</h3>
                            <div className='container-menu-footer'>
                                <ul>
                                    <li><a href="documentacao">Soluções e Serviços</a></li>
                                    <li><a href="documentacao">Empresa</a></li>
                                    <li><a href="documentacao">Preços e Taxas</a></li>
                                    <li><a href="documentacao">Suporte</a></li>
                                    <li><a href="documentacao">Blog LyTex</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Contato</h3>
                            <div className='container-menu-footer'>
                                <ul>
                                    <li><a href="documentacao">suporte@lytex.com.br</a></li>
                                    <li><a href="documentacao">(31) 9 7560-0216</a></li>
                                    <li><a href="documentacao">0800 591 5280</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Ajuda</h3>
                            <div className='container-menu-footer'>
                                <ul>
                                    <li><a href="documentacao">Canal de Denúncias</a></li>
                                    <li><a href="documentacao">Código de Ética</a></li>
                                    <li><a href="documentacao">Carreiras </a></li>
                                    <li><a href="documentacao">Ouvidoria </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Informações</h3>
                            <div className='container-menu-footer'>
                                <ul>
                                    <li><a href="documentacao">Política de cookies</a></li>
                                    <li><a href="documentacao">Política de privacidade</a></li>
                                    <li><a href="documentacao">API de integração </a></li>
                                    <li><a href="documentacao">Gerir Cockies </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
        .container-menu-footer ul {
            padding: 0;
            margin: 0;
        }
          .footer-doc-lytex{
            background: #0A2640;
            color: white;
            z-index: 9999999;
            position: absolute;
            width: 100%;
            padding: 39px 0px 40px 0px;
          }
          .container-menu-footer ul li {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            
            .container-menu-footer ul li a {
                color: white;
                font-family: 'Ubuntu';
                font-style: normal;
                font-weight: 300;
                font-size: 17px;
                line-height: 31px;
                color: #FFFFFF;
                text-decoration: none;
            }
        `}</style>
      </div>
  );
}

export default Footer;


/*

<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/