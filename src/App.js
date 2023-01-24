
import { RedocStandalone } from 'redoc';
import './App.css';
import Header from './components/header'
import Doc from './doc.json';
import Plataforma from './plataforma.yaml';
import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from './components/footer'
import {PageNotFound, Home} from './routes'
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentacao" element={<Documentacao />} />
          <Route path="introducao-ao-sistema" element={<IntroducaoSistema />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function Documentacao() {
  return (
    <div>
      <RedocStandalone
        specUrl= {Doc}
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
          .container-cta-api {
                margin-bottom: 40px;
                margin-top: 30px;
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

    </div>
  );
}

function IntroducaoSistema() {
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