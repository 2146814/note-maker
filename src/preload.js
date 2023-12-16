// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

//Importation de module Node.js
const fs = require("fs");

window.addEventListener("DOMContentLoaded", () => {
  //Ressources
  const notes = readNotesFromJson();

  //Widgets
  const notesContainer = document.getElementById("notes-container");

  const form = document.getElementById("form-newNote");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Je veux ajouter une note !");
  });

  const newNoteTitle = document.getElementById("newNoteTitle");
  const today = new Date();
  newNoteTitle.value =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const newNoteContent = document.getElementById("newNoteContent");
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
    console.log(notes);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error.message);
  }

  return notes;
}