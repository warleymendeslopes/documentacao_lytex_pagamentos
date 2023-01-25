import { RedocStandalone } from 'redoc';
import DocJson from '../documents/doc.json';
function DocumentationLytex() {
    return (
      <>
        <RedocStandalone
          specUrl= {DocJson}
          options={{
            nativeScrollbars: true,
            //sideNavStyle: "path-only",
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
              @media (max-width: 600px){
                .sc-hLBbgP {
                  padding: 0px 10px;
                }
              }
            .container-cta-api {
                  margin-bottom: 40px;
                  margin-top: 30px;
              }
              .sc-hLBbgP {
                width: 100%;
            }
            a.botton-create-account {
                padding: 9px 10px;
                border: 2px solid #004cff;
                border-radius: 8px;
                font-family: 'Ubuntu';
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 150%;
                color: #004cff;
                text-decoration: none;
            }
            a.botton-open-account {
              border: 2px solid #004cff;
              padding: 9px 10px;
              background: #004cff;
              border-radius: 8px;
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: 500;
              font-size: 13px;
              line-height: 150%;
              color: white !important;
              color: #ffffff;
              text-decoration: none;
              margin-left: 15px;
          }
  
            .sc-eDvSVe {
              background: #fafafa;
              width: 100%;
              padding: 77px 0;
            }
            .menu-content {
              top: 86px !important;
              height: calc(80vh - 0px) !important;
            }
            .sc-eDvSVe h2 {
              padding-top: 19px;
            }
            .api-content {
              top: 0px !important;
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
          .sc-jSUZER {
              padding-top: 54px;
              padding-bottom: 50px;
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
        
        `}</style>
  
      </>
    );
  }

  export default DocumentationLytex;



  