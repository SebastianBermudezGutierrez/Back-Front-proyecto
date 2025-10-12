const router = require('express').Router();
const ctrl = require('../controllers/remindersController');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.getReminders);
router.post('/', auth, ctrl.createReminder);
router.put('/:id', auth, ctrl.updateReminder);
router.delete('/:id', auth, ctrl.deleteReminder);

module.exports = router;
