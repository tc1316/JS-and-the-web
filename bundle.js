(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        setNotes(notes) {
          this.notes = notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.api = api2;
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note-button");
          this.resetButtonEl = document.querySelector("#reset-button");
          this.buttonEl.addEventListener("click", () => {
            let newNote = this.inputEl.value;
            if (newNote) {
              this.api.createNote(newNote, (res) => {
                this.model.setNotes(res);
                this.displayNotes();
                this.inputEl.value = "";
              });
            }
          });
          this.resetButtonEl.addEventListener("click", () => {
            this.api.resetNotes().then(() => {
              this.model.reset();
              this.displayNotes();
            });
          });
        }
        displayNotes = () => {
          const elements = document.getElementsByClassName("note");
          while (elements.length > 0)
            elements[0].remove();
          let array = this.model.getNotes();
          for (let i = 0; i < array.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.append(array[i]);
            newDiv.className = "note";
            this.mainContainerEl.append(newDiv);
          }
        };
      };
      module.exports = NotesView2;
    }
  });

  // notes-backend-server/notesApi.js
  var require_notesApi = __commonJS({
    "notes-backend-server/notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((res) => res.json()).then((res) => callback(res));
        }
        createNote(note, callback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: note })
          }).then((res) => res.json()).then((data) => callback(data));
        }
        resetNotes() {
          fetch("http://localhost:3000/notes", {
            method: "DELETE"
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var model = new NotesModel();
  var api = new NotesApi();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    console.log(notes);
    view.displayNotes();
  });
  console.log("The notes app is running");
})();
