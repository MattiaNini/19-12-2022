import { useState } from "react";
import "./index.css";

const Navbar = ({ cartListLength, setSearchInputValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue); //Implementazione relativa al Search in Input
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contatti</li>
        <li>Chi Siamo</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca Prodotto.."
          required
        />
      </form>
      <div className="Navbar__cart">
        <p>🛒{cartListLength} </p>
      </div>
    </div>
  );
};

export default Navbar;
