import styles from "./index.module.scss";

const Card = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className={styles.text}>
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button>Ordina</button>
        <button>Info</button>
      </div>
    </div>
  );
};

export default Card;
