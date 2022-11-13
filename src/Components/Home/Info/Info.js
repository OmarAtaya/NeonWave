import React from 'react';
import InfoImage from '../../../Assets/Info.jpg';
import {InfoShop, InfoSubTitle, InfoContent, InfoTitle, InfoText, InfoImg, Information} from './InfoElements'

function Info() {

  return (
    <Information>
        <InfoContent>
            <InfoTitle>
                NEON WAVE
            </InfoTitle>
            <InfoSubTitle>
                THE HOME OF VISUAL DECOR
            </InfoSubTitle>
            <InfoText>
                Neon Wave is a boutique that specializes in modern, visually pleasing decor that will light up any setting you put them in. 
            </InfoText>
            <InfoText>
                Affordable, aesthetic and superior quality, that's what we're all about. 
            </InfoText>
            <InfoShop>
                Shop Our Collections
            </InfoShop>
        </InfoContent>
        <InfoImg src={InfoImage}/>
    </Information>
  )
}

export default Info