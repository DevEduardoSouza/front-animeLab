import React from "react";
import "./BestSellers.css";
import { motion } from "framer-motion";

const BestSellers = () => {
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

  return <div className="container-best-sallers">Mais vendidos</div>;
};

export default BestSellers;
