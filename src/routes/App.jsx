import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import CreateLogin from '../pages/CreateLogin';
import Layout from '../containers/Layout';
import RecoveryPassword from '../pages/RecoveryPassword';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Orders from '@pages/Orders';
import Login from '@pages/Login';
import MyAccount from '@/ages/MyAccount';
import NewPassword from '@pages/NewPassword';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import SendEmail from '../pages/SendEmail';
import '@styles/global.css';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      {/* <BrowserRouter basename='/React-Shop/'> */} 
      {/* basename='/ReactShop/'  este es para poder hacer deploy en github pages*/}
        <Layout>
          <Routes>
                <Route exact path="/" element= {<Home />} />
                <Route exact path="login" element= {<Login/>} />
                <Route exact path="/password-recovery" element= {<RecoveryPassword />} />
                <Route exact path="/send-email" element= {<SendEmail/>}/>
                <Route exact path="/new-password" element= {<NewPassword />}/>
                <Route exact path="/account" element= {<MyAccount />}/>
                <Route exact path="/signup" element= {<CreateLogin />} />
                <Route exact path="/checkout" element= {<Checkout />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route path="*" element= {<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>  
  );
}
 {/* se puede abrir y cerrar en la misma etiqueta o podemos <Login></Login> o se puede ambas funcionan <Login/> , se deja un espacio para que con el llamado {children}, se añadan componentes.los nombres(<Layout>,<Login /> ) de etiquetas se crearon en la carpeta de containers y son llamadas de html, si no va a recibir ningún valor la estructura recomendada es <Login /> */}

export default App