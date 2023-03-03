import Button from "../button";
import "./index.css";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <h3>Accetta i cookies per proseguire!</h3>
        <div className="Modal__content--btns">
          <Button
            text="Annulla"
            clickFunc={() => alert("Devi prima accettare i cookies!")}
          />
          <Button
            text="Conferma"
            clickFunc={() => setModalOpen((prev) => false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
