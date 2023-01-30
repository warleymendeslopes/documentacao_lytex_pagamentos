import './block.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

    <Link to="/documentacao">
      <section className="blocks-home-page ">
          <div className="container link-documentatio">
          </div>
      </section>
    </Link>
    <style jsx>{`

    .blocks-home-page {
      cursor: pointer;
      background: #004CFF;
      background-image: url(/banner_desktop_home.webp);
      height: 60vh;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: contain;
      position: relative;
    }
    .title-home-page{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 53px;
        line-height: 49px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }


    @media only screen and (max-width: 1401px) {

    }

    @media only screen and (max-width: 960px) {
      .blocks-home-page {
        height: 41vh ;
      }
            
    }

    @media (max-width: 600px){
        .blocks-home-page {
          background: #004CFF;
          padding-top: 100px;
          background-image: url(/Mobile.png);
          height: 77vh;
          background-repeat: no-repeat;
          background-position: bottom, center;
          background-size: contain;
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