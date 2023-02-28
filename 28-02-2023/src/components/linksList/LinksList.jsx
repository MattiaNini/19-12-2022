import "./index.css";
import { ListLinks } from "../../mocks/ListLinks";
import Card from "../card";

const LinksList = () => {
  return (
    <div className="LinksList">
      {ListLinks.map((ListLinks) => (
        <Card ListLinksData={ListLinks} />
      ))}
    </div>
  );
};

export default LinksList;
