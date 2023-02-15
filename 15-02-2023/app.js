const MongoClient = require("mongodb").MongoClient;
let url = "mongodb+srv://MNini@cb6.wv8qnoc.mongodb.net/demo";

//MI CONNETTO AL MIO DATABASE
MongoClient.connect(url)
  .then((db) => {
    accountDb = db;
    collection = accountDb;
    console.log("Database Connesso");
  })
  .catch((err) => {
    console.log(err);
  });

//Creo un nuovo Documento
/*MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("demo6");
  dbase.collection("utenti", function (err, res) {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});*/

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("demo6");

  let myObj = [
    { nome: "Mattia", anni: "27", lavoro: "web developer" },
    { nome: "Marco", anni: "25", lavoro: "psicologo" },
  ];

  dbase.collection("utenti").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertCount}`);
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("demo6");
  dbase
    .collection("utenti")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

//Seleziono un dato con un filtro
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("demo6");
  let query = { anni: "27" };
  dbase
    .collection("utenti")
    .find(query)
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
