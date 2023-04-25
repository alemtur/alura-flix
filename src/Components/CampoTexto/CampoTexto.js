import { useState } from "react";
import styled from "styled-components";

/* const campoTexto = styled.input`
    background-color: gray;
`
 */
export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        /* console.log("cambio", e.target.value) */
        props.actualizarValor(e.target.value)
    }

    return(
        <div>
            <input 
            placeholder={ placeholderModificado }
            required={ props.required }
            value={ props.valor }
            onChange={ manejarCambio }
        />
        </div>

    );
}