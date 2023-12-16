// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

//Importation de module Node.js
const fs = require("fs");

//Ressources
let notes = readNotesFromJson();

window.addEventListener("DOMContentLoaded", () => {
  //Widgets
  const notesContainer = document.getElementById("notes-container");

  const form = document.getElementById("form-newNote");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newNote = { title: newNoteTitle.value, content: newNoteContent.value };
    writeNoteToJson(newNote);
    AddNoteToPage(notesContainer, newNote);
  });

  const newNoteTitle = document.getElementById("newNoteTitle");
  const today = new Date();
  newNoteTitle.value =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const newNoteContent = document.getElementById("newNoteContent");

  //Initialisation de la page
  notes.forEach((note) => {
    AddNoteToPage(notesContainer, note);
  });
});

//Fonctions
function readNotesFromJson() {
  var notes = [];

  // Utiliser la fonction readFileSync pour
  //lire le fichier de manière synchrone
  try {
    const jsonData = JSON.parse(
      fs.readFileSync(__dirname + "/data.json", "utf-8")
    );

    notes = jsonData;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error.message);
  }

  return notes;
}

function writeNoteToJson(note) {
  const jsonNotes = JSON.stringify(notes.push(note), null, 2);

  // Écrire dans le fichier
  fs.writeFile(__dirname + "/data.json", jsonNotes, "utf-8", (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier JSON :", err);
    }
  });
}

function AddNoteToPage(container, note) {
  var noteContainer = document.createElement("div");

  var noteTitle = document.createElement("strong");
  noteTitle.innerHTML = note.title;

  var noteContent = document.createElement("p");
  noteContent.innerHTML = note.content.replace(/\n/g, "<br>");

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Supprimer";

  // Attacher un gestionnaire d'événements pour la suppression
  deleteButton.addEventListener("click", function () {
    console.log("Je ne veux plus voir cette note !");
  });

  noteContainer.appendChild(noteTitle);
  noteContainer.appendChild(noteContent);
  noteContainer.appendChild(deleteButton);
  noteContainer.classList.add("note"); //Classe CSS

  container.appendChild(noteContainer);
}
