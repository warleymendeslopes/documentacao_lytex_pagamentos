
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
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/#solutions">Soluções e Serviços</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/empresa/">Empresa</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/precos-e-taxas/">Preços e Taxas</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/suporte-tecnico/">Suporte</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/blog/">Blog LyTex</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Contato</h3>
                            <div className='container-menu-footer'>
                                <ul class="menu-footer">
                                    <li>
                                        <div class="icons">
                                            <img loading="lazy" src="/E-mail-footer.svg" width="100%" height="25px" alt="Ícone de E-Mail" />
                                        </div>
                                        <div class="informations-contact"><a href="mailto:suporte@lytex.com.br">suporte@lytex.com.br</a></div>
                                    </li>
                                    <li>
                                        <div class="icons">
                                            <img loading="lazy" src="/icon-whatsapp-footer.svg" width="100%" height="25px" alt="Ícone Whatsapp" />
                                        </div>
                                        <div class="informations-contact"><a href="https://api.whatsapp.com/send?phone=5531998874108&amp;text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Plataforma%20LyTex" target="_blank" rel="noopener noreferrer">(31) 99887-4108</a></div>
                                    </li>
                                    <li>
                                        <div class="icons">
                                            <img loading="lazy" src="/telefone-footer.svg" width="100%" height="25px" alt="Ícone de Telefone" />
                                        </div>
                                        <div class="informations-contact"><a href="tel:08005915280">0800 591 5280</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Informações</h3>
                            <div className='container-menu-footer'>
                                <ul>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/politica-de-cookies/">Política de cookies</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/politica-de-privacidade/">Política de privacidade</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="documentacao">API de integração </a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://lytex.com.br/politica-de-prevencao-a-lavagem-de-dinheiro-e-ao-financiamento-do-terrorismo/">Política de PLDFT </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='title-menu-footer'>Endereço</h3>
                            <div className='container-menu-footer'>
                                <ul class="menu-footer">
                                    <li>
                                        <div class="icons">
                                            <img loading="lazy" src="/endereco-footer.svg" width="100%" height="25px" alt="Ícone de E-Mail" />
                                        </div>
                                        <div class="informations-contact information-endereco"><a href="https://www.google.com.br/maps/place/R.+Dr.+Moacir+Birro,+325+-+Centro,+Cel.+Fabriciano+-+MG,+35170-002" target="_blank" rel="noopener noreferrer">Rua Doutor Moacir Byrro, 325, 1º andar, Centro, Coronel Fabriciano.</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>
                    <h3 className='title-menu-footer'>Ajuda</h3>
                        <div className='container-menu-footer'>
                            <ul id="menu-ajuda" class="menu-footer">
                                <li ><a target="_blank" rel="noopener noreferrer" href="https://homologacao-site.lytex.com.br/canal-de-denuncias/">Canal de Denúncias</a></li>
                                <li ><a target="_blank" rel="noopener noreferrer" href="https://homologacao-site.lytex.com.br/ouvidoria/">Ouvidoria</a></li>
                                <li ><a target="_blank" rel="noopener noreferrer" href="https://homologacao-site.lytex.com.br/lgpd/">LGPD</a></li>
                            </ul>
                        </div>
                </div>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-9 d-flex justify-content-center text-aling-center'>
                            <p className='text-aling-center'>
                            LyTeX Soluções LTDA. CNPJ: 34.778.583/0001-06 Copyright 2022.<br /> 
                            Todos os direitos reservados.<br /> 
                            </p>
                        </div>
                        <div className='col-lg-3 '>
                             <img className='img-logo-pci' src='/pci.svg' alt='pci dds complint' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
        span.get-app {
            font-size: 11px;
        }
        .informations-contact.information-endereco {
            padding-left: 13px;
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
                display: flex;
                align-items: center;
            }
            .icons img {
                margin-right: 21px;
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