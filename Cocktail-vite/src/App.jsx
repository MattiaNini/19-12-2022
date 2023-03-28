import { useState, useEffect } from "react";
import { GET } from "./components/utils/http";
import { filteredList } from "./components/utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Footer from "./components/footer";
import SingleItem from "./components/singleItem";
import Reservation from "./components/reservation";
import styles from "./App.module.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Category Drink");
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
  });

  useEffect(() => {
    GET("/search.php?f=a").then((data) => setCocktailList(data.drinks));
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero setCategory={setCategory} />
      <Content data={cocktailList} />
      <Footer />
    </div>
  );
}

export default App;
