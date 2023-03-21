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
                                        <img className="icons" src="/icones/campos-personalizados.svg" alt="Campos personalizados e metadados" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Campos personalizados e metadados</h4>
                                        <span className="text-icons">Crie campos personalizados e metadados definidos por você com a nossa API. Inclua todas as informações pertinentes ao seu negócio na hora de configurar sua solução de pagamentos.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/webhooks.svg" alt="Integração com Webhooks" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Integração com Webhooks</h4>
                                        <span className="text-icons">Além da nossa API REST, nossa plataforma também tem suporte para a configuração de Webhooks, tornando a comunicação facilitada quando algum evento ocorrer.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/api-de-pagamento.svg" alt="API para qualquer tipo de negócio" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>API simples e aberta</h4>
                                        <span className="text-icons">Integre com nossa API e gere faturas avulsas e recorrentes. Faça também transações bancárias (modo intermediadora) e usufrua de todas funcionalidades da melhor tecnologia de pagamentos do mercado.</span>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>


                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/api_.svg" alt="Configuração para qualquer negócio" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Configuração para qualquer negócio</h4>
                                        <span className="text-icons">Sites de assinaturas, escolas, serviços, hospedagem, e-commerces e dezenas de segmentos com recorrência ou cobrança integram nossa API, construindo uma solução completa de pagamento.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                        <img className="icons" src="/icones/integracao.svg" alt="Integração única para funcionalidades" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Integração única para funcionalidades</h4>
                                        <span className="text-icons">Integração trabalhosa? Esqueça! Absorva as principais funcionalidades por meio de uma única API, dispensando fazer dezenas de integrações distintas.</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-start-mobile">
                                    <div className="flex-shrink-0">
                                    <img className="icons" src="/icones/documentacao-interna.svg" alt="Confiança reconhecida" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-icons">
                                        <h4>Confiança reconhecida</h4>
                                        <span className="text-icons">Certificação internacional PCI Compliance, plataforma com sistema antifraude completo, além de criptografia, firewalls e detecção de possíveis falhas, trazendo segurança e confiança para suas transações.</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className='col-lg-3 d-flex justify-content-center'>
                                <Link className='cta-login-doc fundo-white' to="/documentacao/v2">Ler Documentação</Link>
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
                border-radius: 3px;
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
                font-size: 14px;
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

