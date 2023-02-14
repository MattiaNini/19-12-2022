//--QUERY EFFETTUATE--//

//--Count di tutti i record--//
db.hpfilms.countDocuments();
//--Count su un campo con un filtro--//
db.hpfilms.find({ categoria: "fantasy" }).itcount();
//--Limit--//
db.hpfilms.find().limit(2);
//--Cerca un dato e mostra solo un campo--//
db.hpfilms.find(
  { titolo: "Harry Potter e il Prigioniero di Azkaban" },
  { libro: 1 }
);
//--Cancellazione di un articolo--//
db.hpfilms.deleteOne({ titolo: "Harry Potter e il Calice di Fuoco" });
