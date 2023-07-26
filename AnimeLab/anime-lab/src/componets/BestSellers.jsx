import React from "react";
import "./BestSellers.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const BestSellers = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

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

  return (
    <>
      <h2>Mais Vendidos</h2>
      <div className="container-best-sallers">
        <motion.div
          ref={carousel}
          className="carousel-best-sallers"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {products.map((product) => (
              <motion.div className="product" key={product.name}>
                <img src={product.srcImg} alt={product.name} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BestSellers;
