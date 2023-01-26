import { RedocStandalone } from 'redoc';
import Plataforma from '../documents/plataforma.yaml';




//document.querySelector('.search-input').placeholder= "Pesquisar";

function SystemDocumentation() {

  
    return (
      <div>
        <RedocStandalone 
          specUrl= {Plataforma}
          options={{
            nativeScrollbars: true,
            theme: { 
              colors: { 
                primary: { 
                  main: '#004cff' 
                } 
              } 
            },
          }}
        />
        <style jsx>{`
  
            .sc-eDvSVe {
              background: #fafafa;
              width: 100%;
              padding: 77px 0;
            }
            .menu-content {
              top: 86px !important;
              height: calc(80vh - 0px) !important;
            }
            .api-content {
              // top: 66px !important;
            }
            .api-info {
              width: 100%;
            }
          .sc-eDvSVe:nth-child(2){
            background:#fafafa;
            width: 100%;
          }





          .sc-eDvSVe:nth-child(2) div{
             width: 100%;
          }
          /*remover
          .fWrHAO {
            width: calc(100% - 0%);
            padding: 0 40px;
          }
          */




          .sc-eDvSVe:nth-child(3){
              background:#fafafa;
              width: 100%;
          }
          .sc-eDvSVe:nth-child(3) div{
              width: 100%;
          }
          .sc-eDvSVe:nth-child(4){
              background:#fafafa;
              width: 100%;
          }
          .sc-eDvSVe:nth-child(4) div{
              width: 100%;
          }
          .sc-eDvSVe:nth-child(5){
            background:#fafafa;
            width: 100%;
          }
          .sc-eDvSVe:nth-child(5) div{
              width: 100%;
          }
          p {
            line-height: 1.8;
            font-family: 'Ubuntu';
            color: #707070;
            font-size: 18px;
          }
          h1 {
            color: #004cff !important;
            font-weight: 600 !important;
          }
          h2 {
            color: #707070 !important;
            font-family: Ubuntu !important;
            font-weight: 600 !important;
            line-height: 1.8 !important;
          }
          img,
          video{
            border-radius: 12px; 
            box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
            margin: 15px 0px;
          } 
      
        
        `}</style>
  
      </div>
    );
  }

  export default SystemDocumentation;