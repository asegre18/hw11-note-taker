const router = require('express').Router();
const noteController = require('../../../controller/noteController');
// prepended /api/notes
router.route('/')
  .get(noteController.getAllNotes)
  .post(noteController.addNote);

  router.route('/:id')
  .delete(noteController.deleteNote);

module.exports = router;