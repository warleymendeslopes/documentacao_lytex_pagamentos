import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              }
        ]
    };
    return (
        <>
            <section className='produtos'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='title-blocks'>
                                <div className="sublinhado-title"></div>
                                <h1>Segurança e comodidade de quem sabe o que faz</h1>
                            </div>
                            <div className='content-text'>
                                <p>
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Slider {...settings}>




                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/disponibilidade-garantida.svg" alt="Disponibilidade garantida" />
                                            <h4 className="card-title-header">Disponibilidade garantida</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/acesso-ao-sandbox.svg" alt="Acesso ao sandbox" />
                                            <h4 className="card-title-header">Acesso ao <br/>Sandbox</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/disponibilidade-garantida.svg" alt="segurança garantida" />
                                            <h4 className="card-title-header">Segurança</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/acesso-ao-sandbox.svg" alt="Criptografia de dados " />
                                            <h4 className="card-title-header">Criptografia dos dados</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/disponibilidade-garantida.svg" alt="Disponibilidade garantida" />
                                            <h4 className="card-title-header">Disponibilidade garantida</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/acesso-ao-sandbox.svg" alt="Disponibilidade garantida" />
                                            <h4 className="card-title-header">Disponibilidade garantida</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/disponibilidade-garantida.svg" alt="Disponibilidade garantida" />
                                            <h4 className="card-title-header">Disponibilidade garantida</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">The gradual accumulation of information about </p>
                                    </div>
                                </div>







                            </Slider>
                        </div>
                    </div>
                </div>

            </section>



            <style jsx>{`
            section.produtos {
                padding-top: 40px;
            }
            .sublinhado-title-card {
                width: 50px;
                height: 2px;
                background: #868AA5;
            }
            .sublinhado-title {
                width: 94px;
                height: 7px;
                background: #868AA5;
                top: 12px;
                position: relative;
            }
            
            .container-slide {
                padding: 10px;
            }
            .card-slide {
                background: #FFFFFF;
                box-shadow: 0px 13px 19px rgb(0 0 0 / 7%);
                flex: none;
                order: 0;
                flex-grow: 0;
                padding: 30px 15px 15px 30px;
            }
            .card-title-header {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.1px;
                color: #252B42;
                flex: none;
                order: 1;
                flex-grow: 0;
            }
            .card-text {/* paragraph */
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.2px;
                color: #737373;
                flex: none;
                order: 3;
                flex-grow: 0;
            }


            `}</style>



        </>
    )
}