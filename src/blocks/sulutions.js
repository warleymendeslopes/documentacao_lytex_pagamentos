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
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 4,
                }
              }
        ]
    };
  return (
    <>
    <section className="blocks-solutions">
        <div className="container">
            <div className='row'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div className='stylecta-fake'>
                            <span>Pega o código copia  e cola!</span>
                        </div>
                </div>
                <div className='col-lg-6'>
                    <div className='slid-sulutions'>
                    <Slider {...settings}>

                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>

                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>

                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>
                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>
                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>
                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>
                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>
                        <div className='container-solutions-card'>
                            <div className='solutions-card'>
                                <div className='icon-solution'>
                                    <img src='/icones/boleto.svg' alt='' />
                                </div>
                                <div className='name-solution'><span>Boleto bancário</span></div>
                                <div className='cta-solution'><Link className='cta-login-doc fundo-blue' to="/documentacao">AcessarDocumentação</Link></div>
                            </div>
                        </div>







                    </Slider>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <style jsx>{`

    .blocks-solutions{
        background: #004CFF;
        margin-top: 40px;
        background-image: url(/back-solucoes.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center,center;
        padding: 80px 0px 80px 0px;
    }
    .cta-login-doc.fundo-blue {
        background: #004CFF;
        box-shadow: 0px 7px 22px -6px rgb(0 72 168 / 34%);
        border-radius: 14px;
    }
    .solutions-card {
        background: white;
        display: grid;
        grid-template-columns: 12% 58% 30%;
        align-items: center;
        padding: 4px 19px 4px 10px;
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
        background: #ffffffc4;
        border-radius: 37.7902px;
        padding: 17px;
    }
    
    .stylecta-fake span {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 23px;
        text-align: center;
        color: #004CFF;
    }


    @media only screen and (max-width: 1401px) {

    }

    @media only screen and (max-width: 960px) {
            
    }

    @media (max-width: 600px){
    s
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