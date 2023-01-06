
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import { RedocStandalone } from 'redoc';


function App() {
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

export default App