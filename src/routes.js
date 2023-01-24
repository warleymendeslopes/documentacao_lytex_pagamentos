import NotFound from './pages/404'
import HomePage from './pages/blocks/home-page'
import EsseciaLytex from './pages//blocks/essencia_lytex'
import Produtos from './pages//blocks/produtos'
import Solution from './pages//blocks/sulutions'

export function PageNotFound() {
    return (
        <NotFound />
    );
  }

export function Home() {
    return (
      <div>
        <HomePage />
        <Produtos />
        <EsseciaLytex />
        <Solution />
      </div>
    );
  }