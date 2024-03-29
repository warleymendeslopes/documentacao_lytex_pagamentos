import './block.css';
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Solutions() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "0px",
                display: "flex",
                alignItems: "center",
                width: "30px",
                left: "-39px"

              }}
            >
              <ul className='list-dots-api'> {dots} </ul>
            </div>
          ),
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // responsive: [
        //     {
        //         breakpoint: 600,
        //         settings: {
        //           slidesToShow: 1,
        //           dots: false,
        //           vertical: false,
        //           verticalSwiping: false,
        //           autoplay: false,
        //           arrows: false,
        //         }
        //       }
        // ]
    };
  return (


    <>
    <section className="blocks-solutions">
        <div className="container">
            <div className='row'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        
                           
                            <div className='stylecta-fake'>
                                <div className='title-blocks white'>
                                    <h1 className='title-color-white'>Acesse documentações específicas</h1>
                                </div>
                            </div>
                           
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <div className='slid-sulutions'>
                    <Slider {...settings}>

                        <div className='content-img-slide'>
                                <img src='/slides/Boleto_Turbinado.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Faturas/operation/InvoicesController_createInvoice">Acessar documento</Link>
                        </div>

                        <div className='content-img-slide'>
                                <img src='/slides/Link_de_Pagamento.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Links-de-Pagamento">Acessar documento</Link>
                        </div>

                        <div className='content-img-slide'>
                                <img src='/slides/Split_de_Pagamento.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Faturas">Acessar documento</Link>
                        </div>

                        <div className='content-img-slide'>
                                <img src='/slides/Recorrencia.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Assinaturas">Acessar documento</Link>
                        </div>

                        <div className='content-img-slide'>
                                <img src='/slides/PIX.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Faturas">Acessar documento</Link>
                        </div>

                        <div className='content-img-slide'>
                            
                                <img src='/slides/Notificacoes.png' alt='Cobrança Inteligente' />
                                <Link className='link_doc_ref' to="/documentacao/v2#tag/Faturas">Acessar documento</Link>
                        </div>

                    </Slider>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <style jsx>{`
    .content-img-slide{
        position: relative;
    }
    .link_doc_ref{
        position: absolute;
        top: 13px;
        left: calc(100% - 35%);
        background: #004cff;
        color: white;
        padding: 8px 20px 9px 20px;
        text-decoration: none;
        font-size: 13px;
        border-radius: 8px;
    }
    ul.list-dots-api {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    ul.list-dots-api li {
        padding: 0;
        margin: 0;
    }
    ul.list-dots-api li button::before {
        content: ' ';
        font-size: 25px;
        font-weight: 700;
        color: #dbdbdb !important;
        letter-spacing: 0 !important;
        background: #f8f8f880;
        border-radius: 50px;
        width: 7px;
        height: 7px;
        opacity: inherit !important;
    }
    ul.list-dots-api li.slick-active button::before {
        content: ' ';
        font-size: 25px;
        font-weight: 700;
        color: #dbdbdb !important;
        letter-spacing: 0 !important;
        background: white;
        border-radius: 50px;
        width: 7px;
        height: 21px;
        opacity: inherit !important;
        top: -7px;
    }

    .blocks-solutions{
        background: #004CFF;
        margin-top: 40px;
        background-image: url(/back-solucoes.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center,center;
        padding: 30px 0px 30px 0px;
    }
    .cta-login-doc.fundo-blue {
        background: #004CFF;
        box-shadow: 0px 7px 22px -6px rgb(0 72 168 / 34%);
        border-radius: 14px;
    }
    .solutions-card {
        margin-top: 8px;
        background: white;
        display: grid;
        grid-template-columns: 12% 58% 30%;
        align-items: center;
        padding: 4px 19px 4px 10px;
        border-radius: 20px;
    }
    .name-solution span {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        color: #000000;
    }
    .icon-solution > img {
        border-radius: 0;
        box-shadow: none;
        margin: 0;
    }
    .stylecta-fake {
        background: #00000012;
        border-radius: 37.7902px;
        padding: 17px;
        backdrop-filter: blur(5px);
        width: 75%;
    }
    



    @media only screen and (max-width: 1401px) {

    }

    @media only screen and (max-width: 960px) {
            
    }

    @media (max-width: 600px){
        .solutions-card {
            display: flex;
            flex-direction: column;
            padding: 17px 12px 26px 12px;
        }
        
        .name-solution {
            line-height: 3;
        }
        .link_doc_ref{
            position: absolute;
            top: 13px;
            left: calc(100% - 35%);
            background: #004cff;
            color: white;
            padding: 8px 13px 9px 13px;
            text-decoration: none;
            font-size: 10px;
            border-radius: 8px;
        }
        .stylecta-fake {
            background: #00000000;
            backdrop-filter: blur(0px);
            width: 100%;
        }
    }
    `}</style>
    </>
  );
}

export default Solutions;


/*
<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/
