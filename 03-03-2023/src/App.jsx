import "./app.css";
import Header from "./components/header";
import Gallery from "./components/gallery";
import ChampCard from "./components/champCard";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <Banner
        image="https://www.pinterest.it/pin/651966483532018420/?mt=login"
        alt=""
        title="GO!"
      />
      <ChampCard />
      <Banner
        isImgRight
        image="https://www.pinterest.it/pin/651966483532017343/"
        alt=""
        title="GOOO!"
      />
      <Footer />
    </div>
  );
};

export default App;
