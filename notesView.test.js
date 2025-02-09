/**
 * @jest-environment jsdom
 */
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("../notes-backend-server/notesApi");
const fs = require("fs");

describe("displays notes", () => {
  it("gets list of notes from the model", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const api = new NotesApi();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    const view = new NotesView(model, api);
    view.displayNotes();
    expect(document.querySelectorAll(".note").length).toEqual(2);
  });
});

//   it("input new note title then click button", () => {
//     document.body.innerHTML = fs.readFileSync("./index.html");
//     const model = new NotesModel();
//     const api = new NotesApi()
//     const view = new NotesView(model,api);
//     const inputElement = document.querySelector("#note-input");
//     inputElement.value = "new note!";
//     const buttonElement = document.querySelector("#add-note-button");
//     buttonElement.click();
//     let newDiv = document.createElement("div");
//     newDiv.className = "note";
//     newDiv.append("new note!");
//     expect(document.querySelector(".note")).toEqual(newDiv);
//   });
//   it("shows the right number of notes", () => {
//     document.body.innerHTML = fs.readFileSync("./index.html");
//     const model = new NotesModel();
//     const view = new NotesView(model);
//     const inputElement = document.querySelector("#note-input");
//     inputElement.value = "new note!";
//     const buttonElement = document.querySelector("#add-note-button");
//     buttonElement.click();
//     inputElement.value = "2nd new note!";
//     buttonElement.click();
//     expect(document.querySelectorAll(".note").length).toEqual(2);
//   });
// });
