import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                        <div className="col-lg-4">
                            <div className='title-blocks'>
                                <h1>Conheça nossas solucões e recursos</h1>
                            </div>
                            <div className='content-text'>
                                <p>
                                    Os melhores Meios de Pagamento para sua empresa dentro de um único sistema
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Slider {...settings}>
                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">PIX</h5>
                                            <p className="card-text">Receba de seus clientes em segundos com baixa e identificação automática. Tudo sem mensalidade ou taxa de emissão</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Faturas">ver documentação</Link>
                                        </div>
                                </div>

                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">Boleto</h5>
                                            <p className="card-text">Ofereça mais possibilidades de pagamento em compras parceladas, conquiste clientes e escale seu negócio</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Faturas">ver documentação</Link>
                                        </div>
                                </div>

                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">Cobrança Inteligente</h5>
                                            <p className="card-text">A automatização de cobranças da LyTex é ideal para gerenciar seus recebimentos de maneira fácil e personalizada</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Links-de-Pagamento">ver documentação</Link>
                                        </div>
                                </div>

                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">Checkout</h5>
                                            <p className="card-text">Aproveite nossos benefícios exclusivos e ofereça as formas de pagamento que seus clientes mais utilizam</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Links-de-Pagamento">ver documentação</Link>
                                        </div>
                                </div>

                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">Split de pagamentos</h5>
                                            <p className="card-text">Evite a incidência de tributos duplicados e divida seus recebimentos de forma automática</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Links-de-Pagamento">ver documentação</Link>
                                        </div>
                                </div>

                                <div className="container-slide">
                                        <div className="card-body">
                                            <h5 className="card-title">Link de pagamentos</h5>
                                            <p className="card-text">Descomplique suas vendas com os links de pagamento e venda diretamente pelas redes sociais, sem loja online</p>
                                            <Link className="btn btn-primary documentation" to="/documentacao#tag/Links-de-Pagamento">ver documentação</Link>
                                        </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>

            </section>



            <style jsx>{`
            .container-slide {
                position: relative;
                padding: 6px;
            }
            h5.card-title {
                color: #150067;
                font-size: 1.2rem;
            }
            .card-body {
                background: #FFFFFF;
                box-shadow: 0px 0px 33px 4px rgb(0 0 0 / 9%);
                padding: 24px;
                border-radius: 11px;
            }
            p.card-text {
                font-size: 1rem;
                color: #7d7474;
            }
            a.btn.btn-primary.documentation {
                background: transparent;
                color: #150067;
                border: 2px solid #004cff;
                font-size: 1rem;
                font-weight: 600;
            }


            `}</style>



        </>
    )
}