import "./index.css";

const Card = ({ LinksList }) => {
  return (
    <div className="Card" key={LinksList.id}>
      <h2>{LinksList.name}</h2>
      <img src={LinksList.icon} alt="immagine" />
      <br />
      <div className="Tags">
        <span>{LinksList.tags[0]}</span>
        <span>{LinksList.tags[1]}</span>
      </div>
    </div>
  );
};

export default Card;
