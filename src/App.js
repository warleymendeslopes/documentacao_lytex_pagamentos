import './App.css';
import * as React from "react";
import { 
  Routes, 
  Route, 
  Outlet 
} from "react-router-dom";
import {
  PageNotFound, 
  Home, 
  Documentacao, 
  SystemIntroduction
} from './routes'
import Header from './components/header'
import Footer from './components/footer'



export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentacao/:version" element={<Documentacao />} />
          <Route path="introducao-ao-sistema" element={<SystemIntroduction />} />
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
