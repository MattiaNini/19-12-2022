import "./index.css";
import { shortDescription } from "../../utils/func";

const Card = ({ productData, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext(() => ({
      isVisibile: true,
      productData,
    }));

  return (
    <div className="Card" onClick={onHandleClick}>
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="Card__text--cat">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
      </div>
    </div>
  );
};

export default Card;
