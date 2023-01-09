//Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.
//nb. ogni singola operazione sara una arrow function
//Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

//Avanzato
//Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

const somma = (numOne, numTwo) => numOne + numTwo;
const sottrazione = (numOne, numTwo) => numOne - numTwo;
const moltiplicazione = (numOne, numTwo) => numOne * numTwo;
const divisione = (numOne, numTwo) => numOne / numTwo;

const funzioneampliata = () => {
  const operazione = prompt("Inserire operazione da effettuare");
  if (operazione === "+") {
    console.log(somma(10, 5));
  } else if (operazione === "-") {
    console.log(sottrazione(10, 5));
  } else if (operazione === "*") {
    console.log(moltiplicazione(10, 5));
  } else if (operazione === "/") {
    console.log(divisione(10, 5));
  }
};

funzioneampliata();

//Avanzato
//Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

function eseguioperazione(numOne, numTwo, callback) {
  const risultato = "Addizione";
  callback(risultato);
}

function eseguioperazione2(str) {
  let primaoperazione = "";

  for (let i = 0; i < str.length; i++) {
    primaoperazione += str[i].eseguioperazione2();
  }

  console.log(primaoperazione);
}
