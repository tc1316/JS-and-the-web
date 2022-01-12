// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

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
