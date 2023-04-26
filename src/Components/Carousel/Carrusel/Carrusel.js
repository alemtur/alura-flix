import React from "react";
import styled from "styled-components";
import { SimpleSlider } from "../Slider/Slick";

const DivCarrusel = styled.div`
    margin: 0 auto;
    padding: 40px;
    width: 90%;
    color: #333;
    background: #419be0;

`

export const Carrusel = (datosVideos) => {
    //const { url_video, url_imagen } = datosVideos;

    return(
        <DivCarrusel>
            <SimpleSlider></SimpleSlider>
        </DivCarrusel>
    );
}
