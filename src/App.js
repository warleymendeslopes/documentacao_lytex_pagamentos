
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import { RedocStandalone } from 'redoc';

import Doc from './doc.json';
function App() {
  return (
    <>
      < Header />

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
      .ejgidu {
        padding: 0px 0;
      }
      .sc-hLBbgP.kzDJPW.api-info {
        background: #f8f8f8;
        width: 100%;
        padding: 30px 80px 30px 40px;
      }

      .sc-hLBbgP.fWrHAO {
        background: #f8f8f8;
        width: 100%;
        padding: 30px 80px 30px 40px;
      }  



      `}</style>
    </>
  );
}

export default App