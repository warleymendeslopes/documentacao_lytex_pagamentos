function VarsionAlert({active}) {
    console.log(active)
    function teste(){
        document.querySelector('.showModalAlert.modalAlert').classList.remove('showModalAlert')
    }
    const isActive = active === true ? "showModalAlert modalAlert" : "modalAlert"


    return (

        <div className={isActive}>
            <div className="card-aler">
                <button id="closemodal" onClick={teste}>X</button>
                A versão 1.0 está obsoleta e deixará de receber suporte a partir do dia 24/08/2023.<br /> Recomendamos que utilize a nova versão 2.0
            </div>
            <style jsx>{`
                .showModalAlert{
                display: flex !important;
                }
                .modalAlert {
                    position: fixed;
                    z-index: 999999999;
                    background: #05206975;
                    height: 100vh;
                    width: 100%;
                    top: 0;
                    justify-content: center;
                    align-items: center;
                    display: none;
                }
                .card-aler {
                    position: relative;
                    background: white;
                    padding: 31px 25px;
                    border-radius: 7px;
                }
                button#closemodal {
                    cursor: pointer;
                    background: red;
                    border: none;
                    color: white;
                    position: absolute;
                    top: 0;
                    right: 0;
                    border-radius: 3px;
                    padding: 2px 7px;
                }
            `}</style>
        </div>
    );
}


export default VarsionAlert;
