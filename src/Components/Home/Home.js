import React from 'react';
import Info from './Info/Info';
import SlideShow from './SlideShow/SlideShow';
import Footer from '../Footer/Footer'
import {Homepage, Collections} from './HomeElements'

function Home() {

  return (
    <Homepage>
        <SlideShow />
        <Info />
        <hr color='grey'/>
        <Collections>
        
        </Collections>
        <Footer />
    </Homepage>
    
  )
}

export default Home