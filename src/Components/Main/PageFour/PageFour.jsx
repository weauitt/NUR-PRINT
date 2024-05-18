import './PageFour.css'
import imgOne from '../../../img/PageFour/imgOne.jpg'
import imgTwo from '../../../img/PageFour/imgTwo.jpg'
import imgThree from '../../../img/PageFour/imgThree.jpg'
import imgFour from '../../../img/PageFour/imgFour.jpg'
import imgFive from '../../../img/PageFour/imgFive.jpg'
import imgSix from '../../../img/PageFour/imgSix.jpg'
import imgSeven from '../../../img/PageFour/imgSeven.jpg'
import imgEight from '../../../img/PageFour/imgEight.jpg'
import imgNine from '../../../img/PageFour/imgNine.jpg'
import imgTen from '../../../img/PageFour/imgTen.jpg'
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
    <article  style={{ backgroundImage: "linear-gradient(1deg, rgb(67 223 217), rgb(0 61 95))", boxShadow: "0px -5px 5px 0px white" }}>
      <p className='our-works'>Наши работы</p>

      <section ref={ref} className='karusel'>
        <Slider {...settings}   >
          {images.map(img => (
            <div key={img.id} >
              {inView ? <img src={img.img} className='image' alt="Баннеры бишкек" itemProp='image' /> : ''}
            </div>
          ))}
        </Slider>
      </section>

    </article>
  );
}

export default PageFour;
