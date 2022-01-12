const NotesApi = require('./notesApi')

require('jest-fetch-mock').enableMocks()

describe('Notes class', () => {
  it("calls fetch and load notes", async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(
      ['This note is coming from the server'])
    )

    api.loadNotes((notes)=> {
      expect(notes).toEqual(['This note is coming from the server'])})
  })


})
