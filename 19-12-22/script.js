alert("Benvenuto!");

//Chiedo all'Utente il suo nome
let userPrompt = prompt("Qual è il tuo nome?");
let firstName = userPrompt;

console.log(userPrompt);

//Alert: chiedo all'utente che tipo di operazione vuole effettuare
alert("Ciao " + firstName + "!" + " Che tipo di operazione vuoi effettuare?");

//Chiedo all'utente di inserire il tipo di operazione vuole effettuare
let Operation = prompt("Inserisci l'operazione da eseguire");

// IF and ELSE
if (
  Operation === "addizione" ||
  Operation === "sottrazione" ||
  Operation === "moltiplicazione" ||
  Operation === "divisione"
) {
  let firstNum = prompt("Inserisci primo numero");
  let secNum = prompt("Inserisci secondo numero");
  let intFirstNum = parseInt(firstNum);
  let intSecNum = parseInt(secNum);

  // SWITCH
  switch (Operation) {
    case "addizione":
      console.log(intFirstNum + intSecNum);
      alert("La somma è " + (intFirstNum + intSecNum));
      break;
    case "sottrazione":
      console.log(intFirstNum - intSecNum);
      alert("La differenza è " + (intFirstNum - intSecNum));
      break;
    case "moltiplicazione":
      console.log(intFirstNum * intSecNum);
      alert("Il prodotto è " + intFirstNum * intSecNum);
      break;
    case "divisione":
      console.log(intFirstNum / intSecNum);
      alert("Il quoziente è " + intFirstNum / intSecNum);
      break;
  }
} else {
  alert("Operazione non valida. Si prega di aggiornare la pagina");
}
