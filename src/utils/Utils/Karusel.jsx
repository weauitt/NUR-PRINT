import React from 'react'
import Flickity from 'flickity'
import './Karusel.css'

const flickityOptions = () => {
  initialIndex: 2
}

function Karusel() {
  return (
   <>
   <Flickity className='Slider' elementType='div' disableImagesLoaded='false' options={flickityOptions} reloadOnUpdate static> 

   </Flickity>
   </>
  )
}

export default Karusel