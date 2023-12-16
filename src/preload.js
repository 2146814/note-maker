// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

window.addEventListener("DOMContentLoaded", () => {
  //Ressources
  const notes = [];

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