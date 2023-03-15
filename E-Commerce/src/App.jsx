import { useState } from "react";
import Navbar from "./components/navbar/";
import Hero from "./components/hero";
import MiniCardList from "./components/minicardList/MiniCardList";
import MiniCard from "./components/minicard";
import CardList from "./components/cardList";
import Card from "./components/card";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("Smartphones");

  return (
    <div className="App">
      <h1>VITE E-COMMERCE</h1>
      <Navbar />
      <Hero />
      <MiniCardList category={category} setCategory={setCategory} />
      <CardList title="Smartphones" />
      <CardList title="Other Obj" />
      <Card />
    </div>
  );
}

export default App;
