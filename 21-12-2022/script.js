//# Esercizio 1
//  Sulla base della lezione del giorno:
// - scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola `bootcamp`;

function intro(msg = "Ciao sono Mattia e frequento il corso di") {
  return msg + "Bootcamp";
}

let presentation = intro + "Bootcamp";

//# Esercizio 2
// - scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

//Oggetto che mi identifica in proprietà
let MattiaNini = {
  name: "Mattia",
  surname: "Nini",
  age: "27",
  occupation: "student",
};

console.log(MattiaNini);

//Oggetto che mi identifica per metodi
let MattiaNiniTwo = {
  hobbyOne: "Mi piace fare qualsiasi sport",
  hobbyTwo: "Amo viaggiare",
  hobbyThree: "Amo socializzare",
  MattiaNiniTwo: function () {
    return this.name;
  },
};

console.log(MattiaNiniTwo);

//# Avanzato
//- Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

function sum(num1, num2) {
  return num1 + num2;
}

let total = sum(6, 4);
