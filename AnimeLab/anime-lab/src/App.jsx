import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Carousel from "./componets/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Outlet />
    </>
  );
}

export default App;
