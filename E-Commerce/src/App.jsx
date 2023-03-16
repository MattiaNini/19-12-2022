import { useState, useEffect } from "react";
import Navbar from "./components/navbar/";
import Hero from "./components/hero";
import MiniCard from "./components/minicard";
import CardList from "./components/cardList";
import ProductDetail from "./components/productDetail";
import ModalCart from "./components/modalCart";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [searchInputValue, setSearchInputValue] = useState(""); //Fixato il search della Input
  const [cartList, setCardList] = useState([]);
  const [miniCards, setMiniCards] = useState([]);
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  useEffect(() => {
    GET(
      searchInputValue ? `/products/category/${searchInputValue}` : "/products" //Implementazione search Input
    ).then((data) => setMiniCards(() => data.products));
  }, [searchInputValue]);

  const localStorageCartList =
    window !== "undefined" && //Non l'ho inserito nell'IF perchè avrebbe reso il codice più pesante da scriver
    JSON.parse(localStorage.getItem("cartList") || "[]").length; //LOCALSTORAGE

  return (
    <div className="App">
      <h1>VITE E-COMMERCE</h1>
      <Navbar
        cartListLength={localStorageCartList || cartList.length}
        setSearchInputValue={setSearchInputValue}
      />
      <Hero />
      <div className="App__miniCards">
        {miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
      </div>
      <CardList
        title="Technology"
        endpoint="/products?limit=20"
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=15"
        setModalContext={setModalContext}
      />
      <ModalCart />
      {modalContext.isVisibile && (
        <ProductDetail
          productData={modalContext.productData}
          setCardList={setCardList}
          setModalContext={setModalContext}
        />
      )}
    </div>
  );
}

export default App;
