const router = require('express').Router();
const ctrl = require('../controllers/progressController');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.getPhotos);
router.post('/', auth, ctrl.addPhoto);

module.exports = router;

