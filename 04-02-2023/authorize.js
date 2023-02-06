const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "Mattia") {
    req.user = { name: "Mattia" };
    next();
  } else {
    console.log(`L'utente ${user} autorizzato all'accesso`);
    res.status(401).send(`L'utente ${user} non è autorizzato all'accesso`);
  }
};

module.exports = authorize;
