import './block.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <section className='essecia-lytex'>
        <div className='container-title'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='title-blocks text-center'>
                                <h1 className='title-color-white'>De Dev para Dev, vamos facilitar sua vida! </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-lg-10 container-essecia-lytex'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/campos-personalizados.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Campos personalizados e metadados</h4>
                                        <span className="text-icons">Crie através da API campos personalizados e metadados definidos por você. Inclua informações pertinentes ao seu negócio na hora de criar sua solução de pagamento.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/webhooks.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Webhooks</h4>
                                        <span className="text-icons">Além da nossa API REST, a plataforma da LyTex Pagamentos também suporta a configuração de webhooks para facilitar a comunicação quando algum evento ocorrer.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/documentacao-interna.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Documentação interativa</h4>
                                        <span className="text-icons">Chega de sofrimento. Antes de implementar, você conseguirá mandar requisições reais para a plataforma, economizando tempo de desenvolvimento.</span>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>


                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/api_.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>API para qualquer tipo de negócio</h4>
                                        <span className="text-icons">Integre nossa API para assinaturas, faturas avulsas ou transações (modo intermediadora). Construa uma solução única e com as características para seu negócio.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/integracao.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Integração única para funcialidades</h4>
                                        <span className="text-icons">Absorva todos os principais funcionalidade através de uma única API, dispensando fazer dezenas de integrações distintas.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/api-de-pagamento.svg" alt="" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>API de pagamento flexível</h4>
                                        <span className="text-icons">Sites de assinaturas, escolas, serviços, hospedagem, e-commerces e dezenas de segmentos integram nossa API construindo uma solução única de pagamento.</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className='col-lg-3 d-flex justify-content-center'>
                                <Link className='cta-login-doc fundo-white' to="/documentacao">Ler Documentação</Link>
                            </div>
                        </div>
                    </div>


                    
                    
                    


                    

                </div>
            </div>
        </div>

    </section>
    <style jsx>{`
            .essecia-lytex {
                padding-top: 40px;
            }
            .container-title {
                background: #004cff;
            }
            h1.title-color-white {
                color: white;
            }
            .container-essecia-lytex {
                background: #004cff;
                margin-top: 20px;
                padding: 20px 40px 20px 40px;
                box-shadow: 0 20px 50px rgb(0 0 0 / 20%);
            }
            .icons {
                border-radius: 0; 
                box-shadow: none;
                margin: 0;
            }
            .flex-grow-1.ms-3.text-icons {
                color: white;
            }
            .flex-grow-1.ms-3.text-icons h4 {
                font-family: 'Ubuntu';
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                margin-block-end: 0em;
                margin-block-start: 0em;
            }
            span.text-icons {
                font-family: 'Ubuntu';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
            }
            .d-flex.align-items-center {
                margin-top: 30px;
                margin-bottom: 30px;
            }

        @media only screen and (max-width: 960px) {

        }
        @media (max-width: 600px){

        }
    `}</style>

    </>
  );
}

export default Home;

