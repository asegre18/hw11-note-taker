const router = require('express').Router();
const noteRoutes = require('./notes');
router.use('/notes', noteRoutes);

router.get('/notes', noteController.getAllNotes).then(() => {
    try {
        
    } catch (e) {
        
    }
})

module.exports = router;