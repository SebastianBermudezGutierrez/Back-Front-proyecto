const router = require('express').Router();
const ctrl = require('../controllers/sessionsController');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.getSessions);
router.post('/', auth, ctrl.createSession);

module.exports = router;


