//Importazione modulo Express
const express = require("express");

//Creazione modulo Path
const path = require("path");

//Creazione applicativo con il supporto di Express
const app = express();
const PORT = 8080;

//ASSEGNAZIONE METODO STATIC
app.use(express.static("public"));

//ROUTING BASE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/chi-sono", (req, res) => {
  res.sendFile(__dirname + "/public/chi-sono.html");
});
app.get("/sport", (req, res) => {
  res.sendFile(__dirname + "/public/sport.html");
});
app.get("/viaggi", (req, res) => {
  res.sendFile(__dirname + "/public/viaggi.html");
});

//Gestione 404 page not found
app.get("/benvenuto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("*", (req, res) => {
  res.send("404 | Pagina non trovata");
  console.log(res);
});

//Server in ascolto
app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
