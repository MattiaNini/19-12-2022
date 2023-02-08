const express = require("express");
const app = express();
const articles = require("./products");

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET
app.get("/api/articles", (req, res) => res.status(200).json(articles));

// POST con l'oggetto aggiuntivo
app.post("/api/articles", (req, res) => {
  const { id, title, body, userId, tags, reaction = 0 } = req.body;

  if (!id || !title || !body || !userId || !tags) {
    return res.status(400).json({
      success: false,
      msg: "Il body non dispone di sufficienti elementi",
    });
  } else {
    return res.status(200).json({
      success: true,
      data: {
        id: id,
        title: title,
        body: body,
        userId: userId,
        tags: tags,
        reaction: reaction,
      },
    });
  }
});

// POST
app.post("/api/articles/add", (req, res) => {
  const { id, title, body, userId, tags, reaction = 0 } = req.body;

  if (!id || !title || !body || !userId || !tags) {
    return res
      .status(400)
      .json({ success: false, msg: "Mancano dei dati al body" });
  } else {
    return res.status(200).json({
      success: true,
      data: [
        ...articles,
        {
          id: id,
          title: title,
          body: body,
          userId: userId,
          tags: tags,
          reaction: reaction,
        },
      ],
    });
  }
});

// PUT
app.put("/api/articles/:id", (req, res) => {
  const { id } = req.params;
  const { title, body, tags } = req.body;

  const article = articles.find((article) => article.id === Number(id));

  if (!article)
    return res.status(400).json({
      success: "false",
      msg: `Non ci sono articoli che corrispondono all'id ${id}`,
    });

  const newArticles = articles.map((article) => {
    if (article.id === Number(id)) {
      article.title = title;
      article.body = body;
      article.tags = tags;
    }
    return article;
  });
  res.status(200).json({ success: true, data: newArticles });
});

// DELETE
app.delete("/api/articles/:id", (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );

  if (!article) {
    return res.status(400).json({
      success: false,
      msg: `Non ci sono articoli che corrispondono all'id ${req.params.id}`,
    });
  }

  const newArticles = articles.filter(
    (article) => article.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newArticles });
});

// LOGIN e gestione status 400
app.post("/login/:name", (req, res) => {
  const { name } = req.params;
  if (name === "Mattia") {
    return res.status(200).send(`Benvenuto ${name}`);
  } else {
    return res
      .status(400)
      .send(`Errore: l'utente ${name} non risulta registrato!`);
  }
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
