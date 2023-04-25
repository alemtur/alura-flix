import React from "react";
import styled from "styled-components";

//const BotonStyle = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${props => props.$primary ? "black" : "blue"};
  color: ${props => props.$primary ? "white" : "white"}; */
//  width: 150px;
//  height: 40px;
//  font-size: 1em;
//  margin: 1em;
//  padding: 0.25em 1em;
  //border: 2px solid palevioletred;
//  border-radius: 3px;
//`;

export const Boton = (props) => {
  return(
    <button>{props.children}</button>
  );
}