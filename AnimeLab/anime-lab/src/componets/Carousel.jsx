import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const imgJson = [
    {
      srcImg:
        "https://images.pexels.com/photos/3729213/pexels-photo-3729213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "",
    },
    {
      srcImg:
        "https://images.pexels.com/photos/6423989/pexels-photo-6423989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "",
    },
    {
      srcImg:
        "https://images.pexels.com/photos/5321502/pexels-photo-5321502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "",
    },
  ];

  return (
    <div>
      <Slider {...settings} className="slider">
        {imgJson.map((img) => (
          <div key={img.srcImg}>
            <img src={img.srcImg} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
