import React from 'react';
import './PageFour.css'
import imgOne from '../../../img/PageFour/imgOne.jpg'
import imgTwo from '../../../img/PageFour/imgTwo.jpg'
import imgThree from '../../../img/PageFour/imgThree.jpg'
import imgFour from '../../../img/PageFour/imgFour.jpg'
import imgFive from '../../../img/PageFour/imgFive.jpg'
import imgSix from '../../../img/PageFour/imgSix.jpg'
import imgSeven from '../../../img/PageFour/imgSeven.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PageFour() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    
  };

  const images = [
    {
      id: 1,
      img: imgOne
    },
    {
      id: 2,
      img: imgTwo
    },
    {
      id: 3,
      img: imgThree
    },
    {
      id: 4,
      img: imgFour
    },
    {
      id: 5,
      img: imgFive
    },
    {
      id: 6,
      img: imgSix
    },
    {
      id: 7,
      img: imgSeven
    },
  ]

  return (
    <article>
      <h1 className='our-works'>Наши работы</h1>

      <section className='karusel'>
        <Slider {...settings} >
          {images.map(img => (
            <div key={img.id} >
              <img src={img.img} alt={img.id} className='image' />
            </div>
          ))}
        </Slider>
      </section>

    </article>
  );
}

export default PageFour;
