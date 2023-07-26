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
      name: "Camiseta Anime Attack Ackerman",
      rank: 1,
      price: 100.0,
      discount: 0.3,
      srcImg:
        "https://cdn.awsli.com.br/2500x2500/2571/2571188/produto/218615339/camiseta-attack-on-titan-shingeki-no-kyojin-levi-ackerman-tropa-de-exploraca_branca-dhnxnamhgn.png",
    },
    {
      name: "Camisa Super Animes",
      rank: 2,
      price: 100.0,
      discount: 0.25,
      srcImg:
        "https://d2r9epyceweg5n.cloudfront.net/stores/002/347/744/products/dimona_frente_projeto_22-70-2023-01-15t220541-0231-99aab113337705973d16747746485679-640-0.webp",
    },
    {
      name: "Camiseta Camisa Attack on Titan Anime Masculina Preto",
      rank: 3,
      price: 100.0,
      discount: 0.15,
      srcImg:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/372/products/mockup-of-a-man-wearing-a-customizable-t-shirt-against-a-plain-color-backdrop-1422-el2-78ebf9703b7fe3866116486632132265-1024-1024.png",
    },
    {
      name: "Camiseta ONE PIECE arte os mais fortes",
      rank: 4,
      price: 100.0,
      discount: 0.15,
      srcImg:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/896/540/products/arte2-camisa-amarelo-ouro11-00b68b67cbf6c28f7816369969183951-480-0.png",
    },
    {
      name: "Camiseta Full 3D Fofa Anime Kawaii Soldado - Preto",
      rank: 5,
      price: 100.0,
      discount: 0.1,
      srcImg:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/helpfull/catalog/darling-in-the-franxx.png",
    },
    {
      name: "Camisa Anime Dragon Ball Mr Satan - BeN Camisaria",
      rank: 6,
      price: 100.0,
      discount: 0.5,
      srcImg:
        "https://d2r9epyceweg5n.cloudfront.net/stores/002/347/744/products/dimona_frente_projeto_22-70-2023-01-15t181714-0431-f1cf09451184e7d8f816746711570431-640-0.webp",
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
                    <div className="price-container">
                      <span className="current-price">
                        R$
                        {(
                          product.price -
                          product.price * product.discount
                        ).toFixed(2)}
                      </span>
                      <span className="old-price">R${product.price}</span>
                    </div>
                    <span className="discount">
                      {product.discount * 100}%OFF
                    </span>
                  </div>
                </div>
                <div className="rank">{product.rank}°</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BestSellers;
