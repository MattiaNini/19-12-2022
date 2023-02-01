const http = require("http");

const PORT = 3001;

let articles = "Articoli presenti nel blog";
let comments = "Registro comment";
let users = "Lista degli utenti registrati al blog";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server attivo!");
  } else if (req.url === "/comments") res.end(comments);
  else if (req.url === "/users") res.end(users);
  else if (req.url === "/articles") res.end(articles);
  else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

server.listen(PORT);
console.log(`Server connesso alla porta: ${PORT}`);
