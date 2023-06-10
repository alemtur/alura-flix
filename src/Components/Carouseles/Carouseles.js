import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig/firebase';
import { Carrusel } from "../Carousel/Carrusel/Carrusel";
import styled from "styled-components";
import "./Carruseles.css";



export const Carouseles = () => {
    
      // PARA CATEGORIAS
    //1 - configuramos los hooks
    const [categoriaVideos, setCategoriaVideos] = useState([])

    //2 - referenciamos a la DB firestores
    const categoriaVideosCollection = collection(firestore, "categoria_videos")

    //3 - Funcion para mostrar TODOS los docs
    const getCategoriaVideos = async () => {
        const data = await getDocs(categoriaVideosCollection)
        //console.log(data)
        //console.log(data.docs)
        setCategoriaVideos(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id})) //... spread operator
        )
        //console.log(products)
    }

    //6 - usamos useEffect
    useEffect( () => {
        getCategoriaVideos()
        //eslint-disable-next-line
    }, [] )
  // PARA CATEGORIAS

  
    
    return(
        <div>
            {categoriaVideos.map( (categoriaVideo) => (
                <Carrusel 
                    key={categoriaVideo.id}
                    nombre={categoriaVideo.nombre==="Front End" ? "" : categoriaVideo.nombre}
                    color={categoriaVideo.nombre==="Front End" ? "" : categoriaVideo.color}
                    descripcion={categoriaVideo.nombre==="Front End" ? "": categoriaVideo.descripcion}
                    categoriaVideo={categoriaVideo.nombre}
                    //keyCategoriaVideo={categoriaVideo.id}
                />
            ))}
        </div>
    );
}