import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//styles
import "./styles/main.css"

//components
import Header from "./componentes/Header";
import Tecnicas from "./componentes/Tecnicas";
import Metodologias from "./componentes/Metodologias";
import QuienesSomos from "./componentes/QuienesSomos";
//import Equipo from "./componentes/Equipo";
//import Museo from "./componentes/Museo";
//import Footer from "./componentes/Footer";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Tecnicas />
    <Metodologias />
    <QuienesSomos />
    {/* <Equipo /> */}
    {/* <Museo /> */}
    {/* <Footer /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
