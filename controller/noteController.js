const fs = require('fs');
module.exports = {
  getAllNotes: async (_req, res) => {
    await fs.readFile('./db/db.json', 'utf-9', (e, data) => {
      if (e) throw e;
      res.send(JSON.parse(data));
    });
  },
  addNote: async (req, res) => {
    const input = req.body;
    let notesList = [];
    await res.json(fs.readFile('./db/db.json', 'utf-8', (e, data) => {
      if (e) throw e;
      notesList = JSON.parse(data);
      input.id = notesList.length + 1;
      notesList.push(input);
      console.log(notesList);

      fs.writeFile('./db/db.json', JSON.stringify(notesList), (e) => {
        if (e) throw e;
      });
    }));
  },
    deleteNote: async (req, res) => {
        const inputId = res.req.params['id'];
        console.log('DELETED ' + inputId);
        const correctId = JSON.parse(data).filter(note => note.id !== inputId);

        await fs.writeFile('./db/db.json', JSON.stringify(correctId), (e) => {
          if (e) throw e;
        });
  }
};