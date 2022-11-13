import React, { useState, useEffect } from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Slide1 from '../../../Assets/Slide1.jpg';
import Slide3 from '../../../Assets/Slide3.jpg';
import Slide2 from '../../../Assets/Slide2.jpg';
import {Shop, ImageTitle, SlideShows, Image} from './SlideShowElements'

function SlideShow() {
    const [Images, setImages] = useState([])

    const cardsPerPage = () => {
        const screenWidth = window.screen.width;
        if (screenWidth <= 874) { //small
            setImages(prevImages => [
                {
                    url: Slide2,
                    caption: "ENDEVER IN AN ARRAY OF NEON",
                    size: "auto 100%"
                }
            ])
        } 
        else
        {
            setImages(prevImages => [
                {
                    url: Slide1,
                    caption: "ENDEVER IN AN ARRAY OF NEON",
                    size: "100vw auto"
                },
                {
                    url: Slide3,
                    caption: "LET US LIGHT UP YOUR WORLD",
                    size: "100vw auto"
                },
              ])
        }
    }

    useEffect(() => {
      cardsPerPage();
    }, []);
    

  return (
        <SlideShows>
            <Slide infinite={false} canSwipe={false} indicators={false}>
                {Images.map((image, index) => (
                    <Image style={{background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image.url})`, backgroundRepeat: "no-repeat", backgroundSize: `${image.size}`}} key={index}>
                        <ImageTitle>{image.caption}</ImageTitle>
                        <Shop>SHOP ALL</Shop>
                    </Image>
                ))}
            </Slide>
        </SlideShows>
  )
}

export default SlideShow