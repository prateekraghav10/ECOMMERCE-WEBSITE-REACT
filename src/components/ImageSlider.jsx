import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import React from 'react'
import styled from "styled-components";

const ImageSlider = () => {

  const images = [{
		id: 1,
		src: "https://ciyashop.potenzaglobalsolutions.com/home-slider/wp-content/uploads/sites/18/2018/05/shop.jpg",
		alt: "Image 1"
	},
	{
		id: 2,
		src: "https://smartslider3.com/wp-content/uploads/2018/05/fashionslider.jpg",
		alt: "Image 2 "
	},
	{
		id: 3,
		src: "https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg?w=2000",
		alt: "Image 3"
	},
  {
		id: 4,
    src: "https://teelabs.in/wp-content/uploads/2021/07/custom-T-shirt-printing-in-chennai-india.jpg",
		alt: "Image 4"
	},
  {
		id: 5,
    src : "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-44.jpg?w=996",
    alt: "Image 5"
	},
  {
    id: 6,
    src : "https://mcrshopping.com/panel/public/img/offer/aB6Dmyp3sBV4FCX5.jpg",
    alt: "slide 6"
  }
];

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };
  return (
    <Wrapper>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </Wrapper>
  )
}
const Wrapper = styled.section`
  .slick-slide img {
    display: block;
    margin: auto;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    color: white;
    font-size: 10px;
  }
`;
export default ImageSlider;