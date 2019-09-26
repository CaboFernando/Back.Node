const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.get);
router.get('/getout', indexController.getout);

module.exports = router;