const express = require("express");
const app = express();
const router = require("./router");
const hbs = require("hbs");

const PORT = 5000;

app.use("/", router);

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
