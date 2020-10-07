const router = require('express').Router();
const noteRoutes = require('./notes');
router.use('/notes', noteRoutes);

// router.get('/notes', noteController.getAllNotes).then(() => {
//     try {
//         return noteRoutes;
//     } catch (e) {
//         return e;
//     }
// })

module.exports = router;