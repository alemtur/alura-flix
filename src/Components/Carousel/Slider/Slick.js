import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Slick.css"
import { VideoCard } from "../VideoCard/VideoCard";
import styled from "styled-components";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebaseconfig/firebase';
import { v4 as uuidv4 } from 'uuid';


const SlideDiv = styled.div`
    //display: flex;
    //padding-top: 30px;
    
    /* border-color: cyan;    
    border-style: solid;
    margin-left: 5px; */
    height: 250px;
    /* width: 200px; */
`




export const SimpleSlider = (props) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    // PARA VIDEOS
    //1 - configuramos los hooks
    const [videos, setVideos] = useState([])

    //2 - referenciamos a la DB firestores
    const videosCollection = collection(firestore, "videos")

    //3 - Funcion para mostrar TODOS los docs
    const getVideos = async () => {
        const data = await getDocs(videosCollection)
        //console.log(data)
        //console.log(data.docs)
        setVideos(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id})) //... spread operator
        )
        //console.log(products)
    }

    //6 - usamos useEffect
    useEffect( () => {
        getVideos()
        //eslint-disable-next-line
    }, [] )
  // PARA VIDEOS

        
    return (
      
     

      <SlideDiv>
        
        <Slider {...settings}>
          
            {videos.map( (video) => (
                
                video.categoria===`${props.categoriaVideo}` ? 
                  <VideoCard key={uuidv4()} urlVideo={video.url_video}></VideoCard>
                  
                :                  
                  ""
                    
            ))}

        </Slider>
      </SlideDiv>
    );
  }


