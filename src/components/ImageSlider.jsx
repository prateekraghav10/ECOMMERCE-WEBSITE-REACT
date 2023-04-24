import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import React from 'react'
import styled from "styled-components";

const ImageSlider = () => {

  const images = [{
		id: 1,
		src: "https://miro.medium.com/max/1200/1*K7yx3HTLMBGmDZzy968Ivw.jpeg",
		alt: "Image 1"
	},
	{
		id: 2,
		src: "https://res.cloudinary.com/practicaldev/image/fetch/s--MZvaMEOV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qll2w5atklv13ljmqope.png",
		alt: "Image 2 "
	},
	{
		id: 3,
		src: "https://secure.charityandbiscuits.com/wp-content/uploads/2016/06/20231034/carousel.jpeg",
		alt: "Image 3"
	},
  {
		id: 4,
    src: "https://sharkcoder.com/files/article/carousel_main.jpg",
		alt: "Image 4"
	},
  {
		id: 5,
    src : "https://th.bing.com/th/id/R.ea7a80b84a3381d891f8e9075181bab7?rik=%2bkbXAsKP1kFJag&riu=http%3a%2f%2fwowslider.com%2fsliders%2fdemo-77%2fdata1%2fimages%2ffield175959_1920.jpg&ehk=a93vddCZtGzlg8%2fV4LGXSP7bbeGsQuCLxn2yMWTGhKM%3d&risl=&pid=ImgRaw&r=0",
    alt: "Image 5"
	},
  {
    id: 6,
    src : "https://th.bing.com/th/id/R.4f42f050570f6732327be39916733c0f?rik=oMiISSz57Dk%2b9g&riu=http%3a%2f%2fwowslider.com%2fsliders%2fdemo-77%2fdata1%2fimages%2froad220058.jpg&ehk=UATqMGyrA%2bcYWq%2fZ891waAGImFspHhv9Vn%2fXOrLDQIE%3d&risl=&pid=ImgRaw&r=0",
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