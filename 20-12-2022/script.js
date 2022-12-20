//# Esercizio 1
//Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta, rispettando i seguenti punti:
//- utilizzare il ciclo for classico
//- sarà l'utente ad inserire queste stringhe (`prompt`)
//- alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

//SCRIVO UN ARRAY VUOTO
let element = [];

//ALLA RICERCA DEGLI ELEMENTI! (CICLO FOR CLASSICO)
for (let i = 0; i < 10; i++) {
  element.push(
    prompt("Scrivi il nome di dieci elementi della tavola periodica")
  );
}

//STAMPO IN CONSOLE
console.log(element);

//# Esercizio Avanzato
//-Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`e `for of`)

//FOR IN
for (i in element) {
  console.log(i);
}

//FOR OFF
for (let i of element) {
  console.log(i);
}
