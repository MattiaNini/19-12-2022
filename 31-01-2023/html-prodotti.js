const http = require("http");

const server = http.createServer((req, res) => {
  //PERCORSO
  if (req.url === "/prodotti")
    res.end("Benvenuto nella pagina dei nostri prodotti!");
  else {
    res.end("pagina non trovata");
    res.writeHead(404);
  }
});

server.listen(3001);
