import React from 'react';
import Info from './Info/Info';
import SlideShow from './SlideShow/SlideShow';
import {Homepage, Collections, Footer} from './HomeElements'

function Home() {

  return (
    <Homepage>
        <SlideShow />
        <Info />
        <Collections>
        
        </Collections>
        <Footer>
        </Footer>
    </Homepage>
    
  )
}

export default Home