const { Router } = require('express');
const router = Router();
const { all, create, find } = require('../controllers/recipesController');
const { validateCreate } = require('../middlewares/actions/recipeAction');
const { validateId } = require('../middlewares/actions/generic');

router.get('/all', all);
router.post('/create', validateCreate, create);
router.get('/:id', find);
router.get('/', find);

module.exports = router;
