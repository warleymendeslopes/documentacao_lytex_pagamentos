
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
            <div className='row'>
                <div className='col-lg-2'>
                    <h3 className='title-menu-footer'>Endereço</h3>
                            <div className='container-menu-footer'>
                                <p>
                                    Rua Doutor Moacir Byrro, 325, 1º andar, Centro, Coronel Fabriciano.
                                </p>
                            </div>
                </div>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-9 d-flex justify-content-center text-aling-center'>
                            <p className='text-aling-center'>
                            LyTeX Soluções LTDA. CNPJ: 34.778.583/0001-06 Copyright 2022.<br /> 
                            Todos os direitos reservados.<br /> 
                            <img className='img-logo-pci' src='/pci.svg' alt='pci dds complint' />
                            </p>
                        </div>
                        <div className='col-lg-3 '>
                            <span className='get-app'>BAIXE NOSSO EM BREVE APLICATIVO</span>
                            <img className='img-get-app' src='/get-app.png' alt='Baixe nosso app' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
        span.get-app {
            font-size: 11px;
        }
        img.img-logo-pci {
            max-width: 100%;
            margin-top: 15px;
        }
        p.text-aling-center {
            line-height: 50px;
        }
        
        img.img-get-app {
            max-width: 100%;
        }
        .container-menu-footer ul {
            padding: 0;
            margin: 0;
        }
        .text-aling-center {
            text-align: center;
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