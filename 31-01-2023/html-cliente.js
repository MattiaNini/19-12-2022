const http = require("http");

const server = http.createServer((req, res) => {
  //PERCORSO
  if (req.url === "/cliente") res.end("Benvenuto, Cliente!");
  else {
    res.end("pagina non trovata");
    res.writeHead(404);
  }
});

server.listen(3001);
