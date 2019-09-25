const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.get);
router.post('/new', postController.post);


module.exports = router;