class NotesApi {
  async loadNotes(callback) {
    const res = await fetch("http://localhost:3000/notes")
    const result = await res.json()
    const data = await callback(result)
  }

  async createNote(note, callback) {
    const res = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: note }),
    })

    const result = await res.json()
    const data = await callback(result)
  }

  async resetNotes() {
    await fetch("http://localhost:3000/notes", {
      method: "DELETE",
    });
  }
}

module.exports = NotesApi;
