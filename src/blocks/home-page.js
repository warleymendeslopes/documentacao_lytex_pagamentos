
import Imghome from './img/ovGrEUgrkyE.png';
import IconApi from './img/iconapi.png';
import { Link } from "react-router-dom";
import './block.css';

function Home() {
  return (
    <>
    <section className="blocks">
        <div className="container">
            <div className="row inverter-mobile">
                <div className="col-lg-6 content-lytex-home">
                    <div className='title-sub-title'>
                        <h1 className='title-lytex'>Lytex</h1>
                        <span>Pagamentos</span>
                    </div>
                    <p className='text-lytex-home'>
                        Conheça a melhor e mais simples API de Cobranças do Mercado
                    </p>
                    <Link className='button-document' to="/documentacao">Ler Documento</Link>
                </div>
                <div className="col-lg-6 content-img-home-lytex">
                    <img className='img-lytex-home' src={Imghome} alt="Conheça a melhor e mais simples api de pagamentos" />
                    <div className='card-home-lytex'>
                            <div class="card">
                                <img className='iconapi-lytex-home' src={IconApi} alt="Uma API de pagamentos feitas para descomplicar a sua vida" />
                                <div class="card-body">
                                    <p class="card-text">Uma API de pagamentos feita para simplificar a sua vida com pucos clicks</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <style jsx>{`
    section.blocks {
        background: #fefefe;
    }
    .title-sub-title {
        color: #150067;
        font-family: 'Montserrat', sans-serif;
    }
    h1.title-lytex {
        font-size: 10rem;
        line-height: 0;
    }
    .title-sub-title span {
        position: relative;
        font-size: 90px;
        line-height: 0;
        top: -20px;
    }
    p.text-lytex-home {
        font-size: 1.3rem;
        color: #7D7474;
        font-family: 'Montserrat', sans-serif;
    }
    a.button-document {
        border: 2px solid #004cff;
        padding: 12px 20px 12px 20px;
        border-radius: 13px;
        top: 30px;
        position: relative;
        text-decoration: none;
        font-size: 19px;
        font-weight: 600;
    }

    img.img-lytex-home {
        border-radius: 185px 20px 185px 20px;
    }
    .col-lg-6.content-img-home-lytex {
        position: relative;
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card-home-lytex {
        position: absolute;
        left: -67px;
        bottom: 23px;
        width: 299px;
        background: #FFFFFF;
        box-shadow: 0px 0px 33px 6px rgb(0 0 0 / 13%);
    }
    img.iconapi-lytex-home {
        width: 59px;
        position: absolute;
        top: -26px;
        left: -27px;
    }
    @media only screen and (max-width: 1401px) {
        h1.title-lytex {
            font-size: 6rem;
        }
        .title-sub-title span {
            font-size: 53px;
            top: -5px;
        }
    }

    @media only screen and (max-width: 960px) {
        .col-lg-6.content-lytex-home {
            margin-bottom: 84px;
        }
        img.img-lytex-home {
            border-radius: 0px;
        }
        .card-home-lytex {
            left: auto;
            bottom: -47px;
        }
    }

    @media (max-width: 600px){
        section.blocks {
            margin-top: 68px;
        }
        .row.inverter-mobile {
            display: flex;
            flex-direction: column-reverse;
            text-align: center;
        }
        .col-lg-6.content-img-home-lytex {
            height: auto;
            padding: 0;
            margin: 0;
        }
        img.img-lytex-home {
            border-radius: 0;
        }
        h1.title-lytex {
            font-size: 5rem;
        }
        .title-sub-title span {
            font-size: 48px;
            top: 1px;
        }
        .card-home-lytex {
            position: absolute;
            left: auto;
            bottom: -21px;
            color: #150067;
            width: 299px;
            background: #ffffff;
            box-shadow: 0px 0px 33px 6px rgb(0 0 0 / 13%);
            text-align: center;
        }
        img.iconapi-lytex-home {
            display: none;
        }

    
    }
    `}</style>
    </>
  );
}

export default Home;


/*

<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/