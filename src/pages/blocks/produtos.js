import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            }
        ],
        appendDots: dots => (
            <div style={{bottom: "-49px"}}>
              <ul className='slide-solutions'> {dots} </ul>
            </div>
          ),
    };
    return (
        <>
            <section className='produtos'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='title-blocks'>
                                <div className="sublinhado-title"></div>
                                <h1>Infraestrutura e tecnologia para processamento de pagamentos em larga escala</h1>
                            </div>
                            <div className='content-text'>
                                <p>
                                Entregue a melhor experiência do mundo para seu cliente com a API de LyTex Pagamentos. Acesso agora a API criada para otimizar os processos de recebimentos e agilidade de integração. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Slider {...settings}>




                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/transparencia-na-api.svg" alt="Transparência a API" />
                                            <h4 className="card-title-header">Transparência na API</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">Nossa documentação está aberta e completa. Fornecemos tudo o que sua empresa precisa para flexibilidade, agilidade, ambientes de teste, suporte e integração completa de pagamentos</p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/melhor-tecnologia.svg" alt="A melhor tecnologia" />
                                            <h4 className="card-title-header">A melhor tecnologia</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">Todas as nossas tecnologias estão na nuvem. Utilizamos AWS, CloudFlare e criptografia de ponta a ponta. Prezamos pela qualidade e segurança, pensando no melhor desempenho do seu produto ou serviço.</p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/seguranca-de-dados.svg" alt="Segurança de dados" />
                                            <h4 className="card-title-header">Segurança de dados</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">Um dos nossos principais pilares é a segurança, por isso, seguimos as políticas de privacidade da LGPD (Lei Geral de Proteção de Dados), práticas internacionais do CIS (Center for Internet Security) e autenticação com dois tokens. </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/mais-agilidade.svg" alt="Mais agilidade" />
                                            <h4 className="card-title-header">Mais agilidade</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">Com as soluções da LyTex Pagamentos, a equipe ganha agilidade tanto na integração quanto no dia a dia, com os processos automatizados de recebimentos de PIX e boletos e instantâneos.  </p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/suporte-tecnico.svg" alt="Suporte técnico" />
                                            <h4 className="card-title-header">Suporte técnico</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">A LyTex Pagamentos oferece, além do suporte tradicional, comunicação direta, via Discorde, com a equipe de programadores que irão acompanhar do início ao fim, sua integração.</p>
                                    </div>
                                </div>

                                <div className="container-slide">
                                    <div className="card-slide">
                                        <div className="card-header">
                                            <img src="/icones/disponibilidade-garantia.svg" alt="Disponibilidade garantida" />
                                            <h4 className="card-title-header">Disponibilidade garantida</h4>
                                        </div>
                                        <div className="sublinhado-title-card"></div>
                                        <p className="card-text">Garantimos que nossos serviços estarão disponíveis mensalmente, em média, 99,5% do tempo. Ou seja, você não terá dor de cabeça com seus clientes</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </section>



            <style jsx>{`

            ul.slide-solutions li button::before {
                content: ' ';
                font-size: 25px;
                font-weight: 700;
                color: #004cff !important;
                letter-spacing: 0 !important;
                background: #004cffa3;
                border-radius: 50px;
                width: 7px;
                height: 7px;
                opacity: inherit !important;
            }
            ul.slide-solutions li.slick-active button::before {
                content: ' ';
                font-size: 34px;
                font-weight: 700;
                color: #004cff !important;
                letter-spacing: 0 !important;
                background: #004cff;
                border-radius: 50px;
                width: 30px;
                height: 7px;
                opacity: inherit !important;
                top: 1px;
                left: -9px;
            }
            ul.slide-solutions li {
                position: relative;
                display: inline-block;
                width: 13px;
                height: 0px;
                margin: 0 5px;
                padding: 0;
                cursor: pointer;
            }
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
                padding: 30px 17px 15px 17px;
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
