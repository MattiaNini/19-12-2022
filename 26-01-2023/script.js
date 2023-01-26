//Esercizio 1
const bodyEl = document.body;
const titleEl = document.createElement("h1");
const stopBtnEl = document.createElement("button");

stopBtnEl.textContent = "STOP!";
bodyEl.append(titleEl, stopBtnEl);

//Creare un intervallo temporale che simuli un conto alla rovescia che dopo n secondi:
const timeoutId = setTimeout(() => {
  console.log(`${new Date().getSeconds()}s`);
}, 500);

let timeout = 10;

//mostra il timer in schermo, come visto a lezione;
//che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;

const intervalId = setInterval(() => {
  if (timeout === 0) {
    bodyEl.style.backgroundColor = "red";
    titleEl.textContent = "TEMPO SCADUTO!";
  } else {
    timeout--;
    titleEl.textContent = timeout;
  }
}, 1000);

//la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval
clearTimeout(timeoutId);

stopBtnEl.addEventListener("click", () => clearInterval(intervalId));
