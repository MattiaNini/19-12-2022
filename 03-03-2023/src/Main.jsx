import { useState } from "react";
// import Control from "./components/control";
import Hero from "./components/hero";
import LinksList from "./components/linksList/LinksList";
import Modal from "./components/modal";
import Slider from "./components/slider";
import "./main.css";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);

  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Hero title="Store" />
      <Slider />
      <ListProducts setSingleProductModal={setSingleProductModal} />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleProductModal ? (
        <LinksList
          product={singleProductModal}
          setSingleProductModal={setSingleProductModal}
        />
      ) : null}
    </div>
  );
};

export default Main;
