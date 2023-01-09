
import { RedocStandalone } from 'redoc';
import './App.css';
import Header from './components/header'
import Doc from './doc.json';
import Plataforma from './plataforma.yaml';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './blocks/home-page'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentacao" element={<Documentacao />} />
          <Route path="introducao-ao-sistema" element={<IntroducaoSistema />} />
          <Route path="*" element={<NoMatch />} />
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
    </div>
  );
}

function Home() {
  return (
    <div>
      <HomePage />
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
            top: 66px !important;
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
        img.image-tutorial-sistema {
          max-width: 700px !important;
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
            top: 66px !important;
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
      
      `}</style>

    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Faq</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

