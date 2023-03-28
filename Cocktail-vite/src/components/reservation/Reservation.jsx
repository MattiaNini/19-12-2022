import { useState } from "react";
import styles from "./index.module.scss";

const Reservation = ({ setReservationVisibility }) => {
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [closeComponent, setCloseComponent] = useState(false);

  const onHandleTextInput = (e) => setSurname(e.target.value);
  const onHandleDateInput = (e) => setDate(e.target.value);
  const onHandleTimeInput = (e) => setHour(e.target.value);
  const onHandleCloseModal = () => {
    setCloseComponent(true);

    setTimeout(() => {
      setReservationVisibility(false);
    }, 1350);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setReservationVisibility(false);
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div
        className={`${styles.content} ${
          closeComponent && styles.contentFadeOut
        }`}
      >
        <h1>Prenota il tuo posto</h1>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor="text">Inserisci un riferimento</label>
          <input
            id="text"
            name="text"
            type="text"
            value={surname}
            onChange={onHandleTextInput}
            placeholder="Cognome"
            required
          />
          <label htmlFor="date">Per quando</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={onHandleDateInput}
            required
          />
          <label htmlFor="time">A che ora</label>
          <input
            id="time"
            name="time"
            type="time"
            value={hour}
            onChange={onHandleTimeInput}
            required
          />
          <input type="submit" value="Prenota!" />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
