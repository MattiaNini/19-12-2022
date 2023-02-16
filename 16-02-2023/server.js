require("./models/DBconfig");
const express = require("express");
const bodyparser = require("body-parser");
const hbs = require("hbs");
const routes = require("./controllers/routes");
let app = express();
const PORT = 5000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${5000}`);
});
