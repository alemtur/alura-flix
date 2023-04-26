/* import logo from './logo.svg';
import './App.css'; */
import React from "react";
import { Banner } from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { DefaultPage } from "./Components/DefaultPage/DefaultPage";
import  { SimpleSlider } from "./Components/Carousel/Slider/Slick";
import FormNuevoVideo from "./Components/FormNuevoVideo/FormNuevoVideo";
import { Carrusel } from "./Components/Carousel/Carrusel/Carrusel";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>

      {/* <div className="App">
        <DefaultPage contenido =  <FormNuevoVideo />  ></DefaultPage>
      </div> */}
      <Routes>
         <Route path='/' element={ <DefaultPage contenido =  <Carrusel />  /> } />
         <Route path='/nuevo-video' element={ <DefaultPage contenido =  <FormNuevoVideo />  /> } />
         <Route path='/nueva-categoria' element={ <DefaultPage contenido =  <FormNuevoVideo />  /> } />
      </Routes>

    </Router>
  );
}

export default App;
