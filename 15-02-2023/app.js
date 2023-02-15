const MongoClient = require("mongodb").MongoClient;
let url = "mongodb+srv://MNini5:Warrockpro95@cb6.wv8qnoc.mongodb.net/test";

const client = new MongoClient(url);

const studentsObj = [
  {
    nome: "Ivan",
    cognome: "Provedel",
    matricola: "01",
    corsi: ["Inglese", "Francese"],
    esami_da_sostenere: ["Inglese", "Francese"],
  },
  {
    nome: "Alessio",
    cognome: "Romagnoli",
    matricola: "013",
    corsi: ["Storia", "Geografia"],
    esami_da_sostenere: ["Storia", "Geografia"],
  },
  {
    nome: "Sergej",
    cognome: "Milinkovic-Savic",
    matricola: "021",
    corsi: ["Arte", "Disegno Tecnico"],
    esami_da_sostenere: ["Arte", "Disegno Tecnico"],
  },
  {
    nome: "Luis",
    cognome: "Alberto",
    matricola: "010",
    corsi: ["Economia", "Educazione Fisica"],
    esami_da_sostenere: ["Economia", "Educazione Fisica"],
  },
  {
    nome: "Ciro",
    cognome: "Immobile",
    matricola: "017",
    corsi: ["Sociologia", "Psicologia"],
    esami_da_sostenere: ["Sociologia", "Psicologia"],
  },
  {
    nome: "Da eliminare",
    cognome: "Da eliminare",
    matricola: "0006",
    corsi: "",
    esami_da_sostenere: "",
  },
];

const coursesObj = [
  {
    nome: "Inglese",
    materie: ["Modulo B1, Modulo B2"],
    docente: "Maurizio Sarri",
  },
  {
    nome: "Francese",
    materie: ["Modulo B1, Modulo B2"],
    docente: "Emmanuel Macron",
  },
  {
    nome: "Arte",
    materie: ["Arte Moderna, Arte Contemporanea"],
    docente: "Leonardo Da Vinci",
  },
  {
    nome: "Sociologia",
    materie: ["Tecniche di comunicazione, Sociologia Generale"],
    docente: "Edgar Morin",
  },
];

async function create() {
  try {
    const database = client.db("school");
    const students = database.collection("students");
    const courses = database.collection("courses");

    //INSERISCO I DATI NELLE COLLECTION
    const student = await students.insertMany(studentsObj);
    const course = await courses.insertMany(coursesObj);
    console.log(student + course);

    //MOSTRARE UN RECORD CHE RISPETTA UNA CONDIZIONE
    const filteredStudent = await students.find({ matricola: "017" }).toArray();
    console.log("Studente Matricola: =>", filteredStudent);

    //   //AGGIORNO UN RECORD
    //     const update = await students.updateOne(
    //       { matricola: "010" },
    //       { $set: { esami_da_sostenere: ["Economia, Educazione Fisica"]}}
    //     );
    //     console.log("Aggiornamento.. =>", update);
    //     //ELIMINO UN RECORD
    //     const deleteResult = await students.deleteOne({ matricola: "0006" });
    //     console.log("Studente eliminato =>", deleteResult);
  } finally {
    await client.close();
  }
}
create().catch(console.dir);
