import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Boton }  from "../Boton/Boton";
import { Link } from "react-router-dom"

export const DefaultPage = (props) => {
    return <div>
        <Header boton = <Link to="/nuevo-video"><Boton>Nuevo video</Boton></Link> ></Header>
        { props.contenido }
        <Footer></Footer>
    </div>
}