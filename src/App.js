/* import logo from './logo.svg';
import './App.css'; */
import { Boton } from "./Components/Boton";

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

      <Boton>Normal</Boton>
      <Boton $primary>Primary</Boton>


    </div>
  );
}

export default App;
