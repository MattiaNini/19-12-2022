import "./index.css";

const Form = ({ submit }) => {
  return (
    <form className="Form" onSubmit={submit} action="submit">
      <input type="text" placeholder="New Product.." className="Product" />
      <button type="submit">Aggiungi Prodotto</button>
    </form>
  );
};

export default Form;
