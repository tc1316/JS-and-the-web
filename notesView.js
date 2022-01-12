class NotesView {
  constructor(model, api) {
    this.api = api
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    this.inputEl = document.querySelector("#note-input");
    this.buttonEl = document.querySelector("#add-note-button");
    
    this.buttonEl.addEventListener("click", () => {
      let newNote = this.inputEl.value
      if (newNote) {
      this.api.createNote(newNote,(res)=> {
        this.model.setNotes(res)
        this.displayNotes();
        this.inputEl.value = "";
      })}
      
    });
  }



  displayNotes = () => {
    const elements = document.getElementsByClassName("note");
    while (elements.length > 0) elements[0].remove();

    let array = this.model.getNotes();
    for (let i = 0; i < array.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.append(array[i]);
      newDiv.className = "note";
      this.mainContainerEl.append(newDiv);
    }
  };
}

module.exports = NotesView;
