


import './App.css';
import Header from './components/header'
import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from './components/footer'
import {PageNotFound, Home, Documentacao, SystemIntroduction} from './routes'
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentacao" element={<Documentacao />} />
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
