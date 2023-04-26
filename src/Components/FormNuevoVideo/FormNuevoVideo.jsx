import { useState } from "react"
/* import "./Formulario.css" */
//import Campo from "../Campo"
//import ListaOpciones from "../ListaOpciones/ListaOpciones"
import { Boton } from "../Boton/Boton"
import { CampoTexto } from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import { Link } from "react-router-dom"

const FormNuevoVideo = (props) => {

    const [titulo,setTitulo] = useState("")
    const [urlVideo,setUrlVideo] = useState("")
    const [urlImagen,setUrlImagen] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")

    /* const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("") */

    //const  { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        /* console.log("Manejar el envio", evento) */
        //console.log("Manejar el envio")
        let datosAEnviar = {
            /* nombre: nombre, */ 
            titulo, /* solo el campo indica que tiene el valor */
            urlVideo,
            urlImagen,
            categoria,
            descripcion
        }
        /* console.log(datosAEnviar) */
        /* props.registrarColaborador(datosAEnviar) */
        //registrarColaborador(datosAEnviar)        
    }

    const manejarNuevoVideo = (e) => {
        e.preventDefault()
        /* console.log(titulo, color) */
        //crearEquipo({titulo, colorPrimario: color})
    }

    const limpiarCampos = () => {
        setTitulo('')
        setUrlVideo('')
        setUrlImagen('')
        setDescripcion('')
    }


    return <section className="formulario">
        <form onSubmit={ manejarNuevoVideo }>
            <h2>Nuevo video</h2>
            
            <CampoTexto 
                //titulo="Nombre"
                placeholder="Titulo"
                required
                valor={ titulo }
                actualizarValor={ setTitulo }
            />

            <CampoTexto 
                //titulo="Nombre"
                placeholder="Link del video"
                required
                valor={ urlVideo }
                actualizarValor={setUrlVideo }
            />

            <CampoTexto 
                //titulo="Nombre"
                placeholder="Link imagen del video"
                required
                valor={ urlImagen }
                actualizarValor={ setUrlImagen }
            />
            
            <ListaOpciones 
                valor={ categoria }
                setCategoria={ setCategoria }
                //equipos={props.equipos}
            />
            
            <CampoTexto 
                //titulo="Nombre"
                placeholder="Descripción"
                required
                valor={ descripcion }
                actualizarValor={ setDescripcion }
            />

            <Boton>Guardar</Boton>
            <Boton funcion={limpiarCampos}>Limpiar</Boton>
            <Link to="/nueva-categoria"><Boton>Nueva Categoría</Boton></Link>
        </form>
        
    </section>
}

export default FormNuevoVideo