import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { AiOutlineStar } from "react-icons/ai";

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
  {
    name: "Sapato4",
    price: 35.99,
    srcImg:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
  },
  {
    name: "Sapato5",
    price: 35.99,
    srcImg:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
  },
  {
    name: "Sapato6",
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
        {products.map((product) => (
          <div className="product" key={product.name}>
            <img className="img-product" src={product.srcImg} alt="" />
            <span className="rating">
              <AiOutlineStar />
            </span>
            <span className="name">{product.name}</span>
            <span className="price">{product.price}</span>
            <button className="add-car">add car</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
