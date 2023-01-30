const http = require("http");

const server = http.createServer((req, res) => {
  //PERCORSI
  if (req.url === "/") res.end("Benvenuto!"); // 1°PERCORSO
  else if (req.url === "/studenti") res.end("Sezione Studenti"); // 2° PERCORSO
  else if (req.url === "/corsi") res.end("I nostri corsi: "); // 3° PERCORSO
  else {
    res.end("pagina non trovata");
    res.writeHead(404);
  }
});

server.listen(3000);

//Nella barra di ricerca, scriverò: localhost:3000 (1°PERCORSO) per la prima pagina, localhost:3000/studenti (2°PERCORSO) per la seconda pagina (sezione studenti) e localhost:3000/corsi (3°PERCORSO) per la terza pagina relativa ai corsi.
