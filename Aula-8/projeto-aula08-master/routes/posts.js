// ROUTE posts.js
const express = require('express');
const router = express.Router();
const authGuard = require('../helpers/guard');

const postsController = require('../controllers/posts');


router.use(authGuard);
router.get('/', postsController.get);
router.post('/novo', postsController.novo);

module.exports = router;