const http = require("http");
const os = require("os");

//TEMPLATE LITERAL
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<a href="localhost:3001/prodotti"></a> //1a IMPLEMENTAZIONE (Prodotti)
<a href="localhosto:3001/cliente"></a> //2a IMPLEMENTAZIONE (Clienti)
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio); //RICHIAMO IL VALORE DELLA VARIABILE
});
server.listen(3001);
console.log(messaggio);
