//import { Boton }  from "../Boton/Boton";
import logo from "../../imgs/logo.png"
import "./Header.css"

export const Header = (props) => {
    return <div className="header">
        <img src={logo} alt="Logo AluraFlix" />
        {/* <Boton>Nuevo video</Boton> */}
        { props.boton }
    </div>
}