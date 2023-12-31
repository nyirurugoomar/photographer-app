import React from 'react'
import { SliderData } from './SliderData';
import Image from 'next/image';

function Slider({slides}) {
  return (
    <div id='gallery'>
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, index) =>{
            return(

            <Image src={slide.image} 
             alt='/' 
             width='1440'
             height='600'
             
             />

            );
            
        })}
      </div>
    </div>
  )
}

export default Slider