import "./index.scss";
import Card from "../card";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className="Content">
      <div className="Content__title">
        <h2>LE NOSTRE ECCELLENZE</h2>
      </div>
      <div className="Content__cards">
        {data.map((cocktail) => (
          <Card data={cocktail} setSingleItemContext={setSingleItemContext} />
        ))}
      </div>
    </div>
  );
};

export default Content;
