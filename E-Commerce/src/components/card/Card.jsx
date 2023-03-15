import "./index.css";

const obj = {
  id: 1,
  title: "iPhone 12",
  description: "sono la descrizione",
  price: "€799,99",
};

const Card = () => {
  return (
    <div className="Card">
      <h3 className="Card__title">{obj.title}</h3>
      <p className="Card__description">{obj.description}</p>
      <p className="Card__price">{obj.price}</p>
    </div>
  );
};

export default Card;
