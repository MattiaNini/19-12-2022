const express = require("express");

const hbs = require("hbs");

const PORT = 8080;

const app = express();
app.set("view engine", "hbs");

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
