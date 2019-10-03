const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');

router.get('/', loginController.get);
router.get('/sair', loginController.sair);
router.post('/', loginController.autenticar);
router.get('/cadastro', loginController.cadastroGet);
router.post('/cadastro', loginController.cadastroPost);

module.exports = router;