import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

import { Link } from "react-router-dom";

import LogoLoja from "../assets/logo_animelab.png";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={LogoLoja} alt="logo" />
        </div>
        <nav>
          <div className="search">
            <form>
              <input
                type="search"
                className="search-input"
                placeholder="Buscar"
              />
              <button className="search-btn">
                <AiOutlineSearch className="largeIcon" />
              </button>
            </form>
          </div>
          <ul>
            <li>
              <button>
                <AiOutlineHeart className="largeIcon" />
              </button>
            </li>
            <li>
              <button>
                <AiOutlineUser className="largeIcon" />
              </button>
            </li>
            <li>
              <button>
                <BsCart2 className="largeIcon" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/camisas"}>Camisas</Link>
            </li>
            <li>
              <Link to={"/casacos"}>Casacos</Link>
            </li>
            <li>
              <Link to={"/shorts"}>Bonés</Link>
            </li>
            <li>
              <Link to={"/shorts"}>Shorts</Link>
            </li>
            <li>
              <Link to={"/shorts"}>Canecas</Link>
            </li>
            <li>
              <Link to={"/shorts"}>Pôsteres</Link>
            </li>
            <li>
              <Link to={"/shorts"}>Outros</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
