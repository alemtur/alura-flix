import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import "./DefaultPage.css"
//ojo con el div class container por los margenes
export const DefaultPage = (props) => {
    return <div>
        <Header boton = {props.boton} ></Header>
        { props.contenido}
        {/* { props.carruselFrontEnd }
        { props.carruselBackEnd }
        { props.carruselInnovacionGestion } */}
        { props.carruseles }
        <Footer></Footer>
    </div>
}