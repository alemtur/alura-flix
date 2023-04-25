import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]
    
    const manejarCambio = (e)  => {
        /* console.log("cambio", e.target.value) */
        props.setCategoria(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Categorías</label>
        <select value={ props.valor } onChange={ manejarCambio }>
            <option value="" disabled defaultValue="" hidden>Escoja una categoría</option>
            { categorias.map( (categoria, index) => <option key={ index } value={ categoria }>{ categoria }</option>)}
        </select>
    </div>
}

export default ListaOpciones