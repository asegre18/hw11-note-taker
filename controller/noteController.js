const notes = require('../model/notes');
module.exports = {
  getAllNotes: (req, res) => {
    res.json(notes);
  },
  addNote: (req, res) => {
    notes.push({
      "id": 8,
      "fweet": "I am coming from a post request!"
    })
    res.json(notes);
  },
    deleteNote: (req, res) => {
        notes.pop({
          "id": 8,
          "fweet": "I am coming from a post request!"
        })
    res.json(notes);
  }
}