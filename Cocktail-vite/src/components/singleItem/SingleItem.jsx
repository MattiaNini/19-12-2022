import styles from "./index.module.scss";
import { valuesExtractor } from "../utils/funcs";

const SingleItem = ({ data, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const lista = valuesExtractor(data);

  return (
    <div className={styles.CocktailDetail}>
      <div className={styles.wrapper}>
        <button onClick={onHandleClick} className={styles.close}>
          ❌
        </button>
        <div className={styles.text}>
          <h2 className={styles.title}>{data.strDrink}</h2>
          <p>{data.strInstructionsIT}</p>
          <p className={styles.title}>Ingredients:</p>
          {lista.map((x) => (
            <li>{x}</li>
          ))}
        </div>
        <div className={styles.img}>
          <img src={data.strDrinkThumb} alt="strDrinkThumb" />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
