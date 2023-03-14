import "./index.css";

//Remove per ID
const Content = ({ data, remove }) => {
  return (
    <div className="Content__card">
      <h3>{data.toDo}</h3>
      <button onClick={() => remove(data.id)}>X</button>
    </div>
  );
};

export default Content;
