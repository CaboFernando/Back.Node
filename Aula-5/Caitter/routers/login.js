const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');

router.get('/', loginController.get);
router.post('/', loginController.post);


module.exports = router;