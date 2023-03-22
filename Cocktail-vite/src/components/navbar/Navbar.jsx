import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <h1>VITE LOUNGE COCKTAIL'S</h1>
        <img src="/img/Offlogo.png"></img>
      </div>
      <div className={styles.bottom}>
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
