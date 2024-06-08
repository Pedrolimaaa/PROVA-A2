const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');

router.post('/', emprestimoController.createEmprestimo);
router.get('/', emprestimoController.getEmprestimos);
router.get('/:id', emprestimoController.getEmprestimoById);
router.put('/:id', emprestimoController.updateEmprestimo);
router.delete('/:id', emprestimoController.deleteEmprestimo);

module.exports = router;
