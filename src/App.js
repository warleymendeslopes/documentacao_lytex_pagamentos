
import { RedocStandalone } from 'redoc';
import './App.css';
import Header from './components/header'
import Doc from './doc.json';
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
          <Route path="dashboard" element={<Dashboard />} />
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
          }
          .api-info {
            width: 100%;
          }
          div#section\/Criar-primeira-cobranca\/Criando-token-de-acesso {
            background: red;
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
      
      `}</style>

    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
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

