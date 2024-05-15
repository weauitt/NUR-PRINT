import './PageFour.css'
import imgOne from '../../../img/PageFour/imgOne_6_11zon.jpg'
import imgTwo from '../../../img/PageFour/imgTwo_11_11zon.jpg'
import imgThree from '../../../img/PageFour/imgThree_10_11zon.jpg'
import imgFour from '../../../img/PageFour/imgFour_4_11zon.jpg'
import imgFive from '../../../img/PageFour/imgFive_3_11zon.jpg'
import imgSix from '../../../img/PageFour/imgSix_8_11zon.jpg'
import imgSeven from '../../../img/PageFour/imgSeven_7_11zon.jpg'
import imgEight from '../../../img/PageFour/imgEight_1_11zon.jpg'
import imgNine from '../../../img/PageFour/imgNine_5_11zon.jpg'
import imgTen from '../../../img/PageFour/imgTen_9_11zon.jpg'
import "./slick.css";
import "./slick-theme.css";
import Slider from 'react-slick';
import { useInView } from "react-intersection-observer";


function LeftArrow(props) {


  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", left: "6px", zIndex: "2" }}
      onClick={onClick}
    />
  );
}
function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", right: "6px" }}
      onClick={onClick}
    />
  );
}

function PageFour() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  var settings = {
    dots: true,
    dotclass: "slick-slider slick-dots",
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 828,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    {
      id: 8,
      img: imgEight
    },
    {
      id: 9,
      img: imgNine
    },
    {
      id: 10,
      img: imgTen
    },
  ]

  return (
    <article  style={{ backgroundImage: "linear-gradient(1deg, rgb(67 223 217), rgb(0 61 95))" }}>
      <h1 className='our-works'>Наши работы</h1>

      <section ref={ref} className='karusel'>
        <Slider {...settings}   >
          {images.map(img => (
            <div key={img.id} >
              {inView ? <img src={img.img} alt={img.id} className='image' /> : ''}
            </div>
          ))}
        </Slider>
      </section>

    </article>
  );
}

export default PageFour;
