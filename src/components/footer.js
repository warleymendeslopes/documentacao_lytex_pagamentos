import logo from './logo-lytex.svg';
function Footer() {
  return (
      <div className='footer-doc-lytex'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 container-logo-footer d-flex align-items-center justify-content-center'>
                    <div className='footer-logo-lytex'><img src={logo} className="lytex-logo" alt="logo" /></div>
                    <div className='footer-social-midia'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/lytexoficial/?utm_medium=copy_link'>
                            <img src="/icones/instagram_bright_blue.svg" className="lytex-social-midia" alt="logo" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/lytexpagamentos/mycompany/'>
                            <img src="/icones/linkedin_bright_blue.svg" className="lytex-social-midia" alt="logo" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/lytexoficial'>
                            <img src="/icones/facebook_bright_blue.svg" className="lytex-social-midia" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>

                                <div className='col-6'>
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
                                <div className='col-6'>
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

                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='row'>

                                <div className='col-6'>
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
                                <div className='col-5'>
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
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>
                    <h3 className='title-menu-footer'>Ajuda</h3>
                        <div className='container-menu-footer'>
                            <ul id="menu-ajuda" class="menu-footer">
                                <li><a target="_blank" rel="noopener noreferrer" href='https://ajuda.lytex.com.br/'>Central de Ajuda</a></li>
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
                            
                                <span className='desenvolvedor'>
                                    Feito com 
                                    <img loading="lazy" className='lytex-logo-footer' src="https://homologacao-site.lytex.com.br/wp-content/themes/lytexsolutions/assets/img/SVG/footer-lytex.svg" width="17px" height="15px" alt="amor" />
                                    pela LyTex Soluções
                                </span>
                        </div>

                        <div className='col-lg-3 text-align-center'>
                             <img className='img-logo-pci' src='/pci.svg' alt='pci dds complint' />
                             <a target="_blank" rel="noopener noreferrer" href='https://connect.gptw.info/certified-company?s=6112b096-24b6-4cbc-a5e1-5aec7c4e316e'>
                                <img className='img-logo-gptw' src='/icones/selo-gptw.svg' alt='pci dds complint' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
        .container-logo-footer {
            display: flex;
            flex-direction: column;
        }
        .footer-social-midia {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 20px 0;
            flex-basis: 25%;
        }
        
        img.lytex-social-midia {
            max-width: 73%;
        }
        img.img-logo-gptw {
            width: 33%;
            position: relative;
            top: 28px;
            left: 12px;
        }
        span.desenvolvedor {
            position: absolute;
            bottom: 10px;
            font-size: 13px;
        }
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
                font-size: 15px;
                line-height: 24px;
                color: #FFFFFF;
                text-decoration: none;
            }
            @media (max-width: 600px){
                .container-menu-footer ul li a {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                }
                .col-lg-3.text-align-center {
                    text-align: center;
                }
            }
        `}</style>
      </div>
  );
}

export default Footer;