import { useState } from "react";
import "./index.css";

const Slider = () => {
  const images = [
    "https://unsplash.com/it/foto/p4RbIDJAfZg",
    "https://unsplash.com/it/foto/K33BFhGObmk",
    "https://unsplash.com/it/foto/xS8TXApKxYE",
  ];

  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="Slider">
      <img src={images[actualImg]} alt="image" />
      <button onClick={() => setActualImg(actualImg - 1)}>{"<"}</button>
      <button onClick={() => setActualImg(actualImg + 1)}>{">"}</button>
    </div>
  );
};

export default Slider;
