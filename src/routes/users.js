const router = require('express').Router();
const ctrl = require('../controllers/usersController');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.getUsers);
module.exports = router;


