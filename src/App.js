
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
        
    </>
  );
}

export default App