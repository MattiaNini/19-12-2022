import styles from "./index.module.scss";

const Navbar = ({ setReservationVisibility }) => {
  const onHandleClick = () => setReservationVisibility(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <h1>VITE LOUNGE COCKTAIL'S</h1>
        <img src="/img/Offlogo.png"></img>
      </div>
    </div>
  );
};

export default Navbar;
