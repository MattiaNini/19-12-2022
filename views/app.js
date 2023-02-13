const express = require("express");
const hbs = require("hbs");
const PORT = 8000;

//Integrazione cookie-session (npm i cookie-session)
const session = require("cookie-session");
//Integrazione body-parser (npm i body-parser)
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");

//Richiamo cookie-session
app.use(session({ secret: "La mia sessione" }));
//Richiamo body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//--Inizio del ROUTING--//
app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/signup", (req, res) => {
  res.render("Registrati");
});

//POST dati di login
app.post("/signup", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);
  //CAMPI VUOTI
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("signup", { message: "Per favore, aggiungi i dati mancanti!" });
    //CAMPI PIENI
  } else {
    let name = "Mattia";
    let password = "9595";
    let userAuthorize = { name: name, password: password };

    //Imposto il controllo dei dati & redirect a private
    if (name === req.body.name && password === req.body.password) {
      req.session.user = userAuthorize;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }

  res.render("Signup");
});
//---//
//Creazione di una funzione di controllo per proteggere pagina Private
function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

app.get("/private", checkPage, (req, res) => {
  res.render("Privato");
});

app.get("/warning", (req, res) => {
  res.render("Warning");
});

app.get("/logout", (req, res) => {
  console.log("Sei stato disconnesso!");
  res.render("Warning");
});
//--Fine del routing--//

//Server in ascolto
app.listen(PORT, () => {
  console.log(`Server in ascolto su ${PORT}`);
});
