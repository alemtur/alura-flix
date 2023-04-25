import { useState } from "react"
import { Boton } from "../Boton/Boton"
import { CampoTexto } from "../CampoTexto/CampoTexto"


const FormNuevaCategoria = (props) => {

    const [nombre,setNombre] = useState("")
    const [descripcion,setDescripcion] = useState("")
    const [color, setColor] = useState("")

    //const  { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        /* console.log("Manejar el envio", evento) */
        //console.log("Manejar el envio")
        let datosAEnviar = {
            /* nombre: nombre, */ 
            nombre, /* solo el campo indica que tiene el valor */
            descripcion,
            color
            
        }
        /* console.log(datosAEnviar) */
        /* props.registrarColaborador(datosAEnviar) */
        //registrarColaborador(datosAEnviar)        
    }

    const manejarNuevaCategoria = (e) => {
        e.preventDefault()
        /* console.log(titulo, color) */
        //crearEquipo({titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={ manejarNuevaCategoria }>
            <h2>Nueva Categoría</h2>
            {/* <Campo titulo="Nombre" placeholder="Ingresar nombre" /> */}
            <CampoTexto 
                //titulo="Nombre"
                placeholder="Nombre"
                required
                valor={ nombre }
                actualizarValor={ setNombre }
            />
            <CampoTexto 
                //titulo="Nombre"
                placeholder="Descripción"
                required
                valor={ descripcion }
                actualizarValor={ setDescripcion }
            />
            <CampoTexto
                //titulo="Color"
                placeholder="Color"
                required
                valor={ color }
                actualizarValor={ setColor }
                type="color"
            />
            <Boton>Registrar categoría</Boton>
        </form>
    </section>
}

export default FormNuevaCategoria