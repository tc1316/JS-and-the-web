class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(res => callback(res))
  }

  createNote(note,callback) {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"content": note})})
      .then(res => res.json())
      .then(data => callback(data))

    }
  }


module.exports = NotesApi