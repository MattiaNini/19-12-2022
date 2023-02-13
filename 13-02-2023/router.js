const express = require("express");
const router = express.Router();
const session = require("cookie-session");
const bodyParser = require("body-parser");
router.use(express.static("./public"));

router.use(session({ secret: "La mia sessione" }));
router.use(bodyParser.urlencoded({ extended: true }));

checkPage = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/not-auth");
  }
};

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

router.get("/contatti", (req, res) => {
  res.render("contatti", {
    title: "Contatti",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

router.get("/web-design", (req, res) => {
  res.render("web-desing", {
    title: "Web Design",
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", {
    title: "Formazione",
  });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", (req, res) => {
  console.log(`${req.body.name}/${req.body.password}`);
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("signup", {
      message: "Inserisci i dati richiesti per accedere!",
    });
  } else {
    let name = "Mattia";
    let password = "Mattianini";
    let userAuth = { name: name, password: password };
    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/not-auth");
    }
  }
});

router.get("/private", checkPage, (req, res) => {
  res.render("private");
});

router.get("/not-auth", (req, res) => {
  res.render("notAuth", {
    title: "Not authorize",
  });
});

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

router.get("*", (req, res) => {
  res.render("error", {
    title: "Errore",
  });
});

module.exports = router;
