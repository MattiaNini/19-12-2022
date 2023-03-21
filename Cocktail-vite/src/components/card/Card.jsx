import "./index.scss";

const Card = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className="Card" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="Card__content">
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
        <button>Ordina</button>
      </div>
    </div>
  );
};

export default Card;
