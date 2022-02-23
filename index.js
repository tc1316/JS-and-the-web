
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("./notes-backend-server/notesApi");

const model = new NotesModel();
const api = new NotesApi();
// model.addNote("Buy milk");
// model.addNote("Go to the gym");
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  console.log(notes);
  view.displayNotes();
});

console.log("The notes app is running");
