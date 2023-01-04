import React from 'react';
import Info from './Info/Info';
import SlideShow from './SlideShow/SlideShow';
import Footer from '../Footer/Footer';
import Collections from './Collections/Collection';
import {Homepage} from './HomeElements';

function Home() {

  return (
    <Homepage>
        <SlideShow />
        <Info />
        <hr color='grey'/>
        <Collections/>
        <hr color='grey'/>
        <Footer />
    </Homepage>
    
  )
}

export default Home