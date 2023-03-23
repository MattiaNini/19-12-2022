import styles from "./index.module.scss";
import Card from "../card";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className={styles.Content}>
      <div className={styles.title}>
        <h2>LE NOSTRE ECCELLENZE</h2>
        <img src="../../../img/hamburger.png" alt="hamburger"></img>
      </div>
      <div className={styles.cards}>
        {data.map((cocktail) => (
          <Card data={cocktail} setSingleItemContext={setSingleItemContext} />
        ))}
      </div>
    </div>
  );
};

export default Content;
