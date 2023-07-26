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
      rank: 1,
      price: 100.0,
      srcImg:
        "https://maisbrinde.com.br/wp-content/uploads/2023/02/15175310571_717620-20Caneca20Personalizada20jogos20Principal.jpg",
    },
    {
      name: "Camisa do anime naruto Kakashi com mel",
      rank: 2,
      price: 100.0,
      srcImg:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
    },
    {
      name: "Sapato3",
      rank: 3,
      price: 100.0,
      srcImg:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Sapato4",
      rank: 4,
      price: 100.0,
      srcImg:
        "https://cdn.awsli.com.br/2500x2500/2526/2526597/produto/225348817/1689334884858-rqvp3700n6.png",
    },
    {
      name: "Sapato5",
      rank: 5,
      price: 100.0,
      srcImg:
        "https://cdn.awsli.com.br/2500x2500/2571/2571188/produto/218000913/camiseta-ramen-anime-one-piece-dragon-ball-naruto-luffy-goku-manga-i7ku3puoyh.png",
    },
    {
      name: "Sapato6",
      rank: 6,
      price: 100.0,
      srcImg:
        "https://img.irroba.com.br/filters:fill(transparent):quality(80)/helpfull/catalog/itachi-uchiha.png",
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
                <div className="infos">
                  <span className="name-product">{product.name}</span>
                  <div className="price">
                    <span className="current-price">R${product.price}</span>
                    <span className="old-price">
                      R${(product.price * 0.5 + product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BestSellers;
