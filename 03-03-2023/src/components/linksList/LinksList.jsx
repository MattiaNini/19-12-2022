import { useState, useEffect } from "react";
import Card from "../card";
import "./index.css";

const LinksList = ({ setSingleProductModal }) => {
  const [listData, setListData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setListData(data.products));
  }, []);

  const onHandlePage = (min, max, index) => {
    setMin(min);
    setMax(max);
    setActiveBtn(index);
  };

  return (
    <div className="ListProducts">
      {listData
        .filter((product) => product.id > min && product.id <= max)
        .map((product) => (
          <Card
            productData={product}
            setSingleProductModal={setSingleProductModal}
            key={product.id}
          />
        ))}
      <div className="ListProducts__pagination">
        {[...Array(listData.length / 10)].map((item, i) => (
          <button
            className={`${activeBtn === i && "active"}`}
            onClick={() => onHandlePage(i * 10, i * 10 + 9, i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LinksList;
