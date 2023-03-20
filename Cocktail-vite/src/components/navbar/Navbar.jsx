import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__top">
        <h1>VITE LOUNGE COCKTAIL'S</h1>
        <img src="/img/Offlogo.png"></img>
      </div>
      <div className="Navbar__bottom">
        <ul>
          <li>Cocktail Alcolici</li>
          <li>Cocktail Analcolici</li>
          <li>Vini</li>
          <li>Desserts</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
