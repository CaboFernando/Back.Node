const express = require('express');
const router = express.Router();

const guard = require('../helpers/guard');
const postController = require('../controllers/postController');

router.use(guard);
router.get('/', postController.get);
router.post('/new', postController.post);


module.exports = router;