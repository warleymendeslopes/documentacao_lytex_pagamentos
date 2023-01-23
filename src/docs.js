


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RedocStandalone } from 'redoc';

import Header from './components/header'




function Docs() {
  return (
    <>
    < Header />
      <RedocStandalone
        specUrl="https://api-pay.lytex.com.br/v1/open-api-v3-spec.json"
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
    </>
  );
}

export default Docs;

