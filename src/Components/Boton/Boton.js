import React from "react";
import styled from "styled-components";

const BotonStyle = styled.button`
  /* Adapt the colors based on primary prop */
 /* background: ${props => props.$primary ? "black" : "blue"};
  color: ${props => props.$primary ? "white" : "white"}; */
  background: blue;
  color: white;
  width: 150px;
  height: 40px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

export const Boton = (props) => {
  return(
    <BotonStyle onClick={props.funcion}>{props.children}</BotonStyle>
  );
}