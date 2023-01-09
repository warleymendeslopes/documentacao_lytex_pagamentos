
//import logo from './logo-lytex.svg';
//import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <section className="background-video">
        <div>
            <iframe id="enterprise-video" src="https://www.youtube.com/embed/h97IvNuDQs8?autoplay=1&amp;mute=1&amp;controls=0&amp;playlist=h97IvNuDQs8&amp;loop=1&amp;disablekb=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;showinfo=1" allow="autoplay"></iframe>
        </div>
        <div className="lytex__video--logo">
                <h1>Lytex Pagamentos</h1>
                <span>Conheça a melhor e mais simples API de Cobranças do Mercado</span>
                <button>ver API</button>
        </div>
    </section>
    <style jsx>{`
        .background-video {
            background: #00000099;
            min-height: 93vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #enterprise-video {
            height: 104vh;
            width: 100%;
            position: absolute;
            top:-88px;
            z-index: -1;
            overflow: hidden;
            left: 0;
            border: none;
        }
        .lytex__video--logo {
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .lytex__video--logo button {
            background: transparent;
            border: solid 1px white;
            color: white;
            height: 50px;
            width: 271px;
            margin-top: 25px;
            font-size: 1.5rem;
            font-weight: 900;
            border-radius: 9px;
        }
        
        .lytex__video--logo h1 {
            font-size: 3rem;
            line-height: 11px;
            font-weight: 900;
        }
        
        .lytex__video--logo span {
            font-size: 2rem;
            font-weight: 400;
        }
        @media only screen and (max-width: 1199px){
            #enterprise-video {
                display:none;
            }
            .background-video {
                background: url(https://lytex.com.br/wp-content/themes/lytexsolutions/assets/img/ovGrEUgrkyE.webp) center center no-repeat;
                background-size: cover;
                min-height: 60vw;
                position: relative;
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