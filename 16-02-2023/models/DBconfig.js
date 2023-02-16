const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://MNini5:Warrockpro95@cb6.wv8qnoc.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connessione a MongoDB effettuata!");
    } else {
      console.log(`Errore: connessione non disponibile! ${err}`);
    }
  }
);

require("./nota");
