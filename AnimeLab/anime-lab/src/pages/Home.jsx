import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { AiOutlineStar } from "react-icons/ai";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

const products = [
  {
    name: "Sapato1",
    price: 35.99,
    srcImg:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
  },
  {
    name: "Sapato2",
    price: 35.99,
    srcImg:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
  },
  {
    name: "Sapato3",
    price: 35.99,
    srcImg:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
  },
];

const Home = () => {
  return (
    <div className="container-best-sellers">
      <h2>Mais vendidos</h2>
      <div className="products-best-sellers">
        <Slider {...settings} className="slider">
          {products.map((product) => {
            <div className="product" key={product.name}>
              <img className="img-product" src={product.srcImg} alt="" />
              <span className="rating">
                <AiOutlineStar />
              </span>
              <span className="name">{product.name}</span>
              <span className="price">{product.price}</span>
              <button className="add-car">add car</button>
            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
