class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes").then(res => res.json()).then(res => callback(res))
  }


}

module.exports = NotesApi