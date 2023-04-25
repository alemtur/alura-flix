/* import logo from './logo.svg';
import './App.css'; */
import React from "react";
import { Banner } from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { DefaultPage } from "./Components/DefaultPage/DefaultPage";
import  { SimpleSlider } from "./Components/Carousel/Slider/Slick";
import FormNuevoVideo from "./Components/FormNuevoVideo/FormNuevoVideo";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Header />
      <Banner />
      <Footer /> */}

      <DefaultPage></DefaultPage>

            
      


    </div>
  );
}

export default App;
