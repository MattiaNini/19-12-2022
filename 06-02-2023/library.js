const express = require("express");
const books = require("./public/hp");
const authorize = require("./authorize");

//Creo l'applicativo con il supporto di Express
const app = express();
const PORT = 8080;

//Assegno il metodo Static
app.use(express.static("public"));

//Creo le mie rotte
//Una home da un file HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//Una pagina pubblica con tutti i vostri libri
app.get("/elencolibri", (req, res) => {
  res.sendFile(__dirname + "/public/productslist.html");
});

//Un collegamento alla pagina json che visualizza solo alcuni dei vostri libri che però è protetta e permette l'ingresso solo a voi
app.get("/books", authorize, (req, res) => {
  const newBooks = books.filter((booksList) => book.price >= 16.99);

  res.json(newBooks);
});

//Metto il server in ascolto
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
