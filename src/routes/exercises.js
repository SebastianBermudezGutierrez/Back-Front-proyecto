const router = require('express').Router();
const ctrl = require('../controllers/exercisesController');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.getExercises);
router.post('/', auth, ctrl.createExercise);

module.exports = router;


