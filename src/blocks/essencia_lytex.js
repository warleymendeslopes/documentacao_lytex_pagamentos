import './block.css';
import ImgAPI from './img/img_api_2.png';


function Home() {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src={ImgAPI} alt="Conecte com a assência da lytex" />
                </div>
                <div className="col-lg-6 content-assencia-lytex">
                    <div className='title-blocks'>
                        <h1>Conecte-se com a<br /> essência LyTex</h1>
                    </div>
                    <div className='content-text'>
                        <p>
                            Tornamos a gestão financeira da sua empresa mais eficiente. Nós automatizamos seus processos, aumentamos a produtividade de suas operações e reduzimos a burocracia do seu negócio. Seguimos o padrão PCI-DSS, garantindo mais segurança nas suas transações.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <style jsx>{`
        section {
            background: #fefefe;
        }
        .content-assencia-lytex{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 69px;

        }
    `}</style>

    </>
  );
}

export default Home;

