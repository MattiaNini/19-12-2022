import { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
  }; //Serve per trasmettere il valore della input (inputValue) all'elemento di ricerca

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contatti</li>
        <li>Chi Siamo</li>
      </ul>
      <form onSubmit={() => {}}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca Prodotto.."
          required
        />
      </form>
    </div>
  );
};

export default Navbar;
