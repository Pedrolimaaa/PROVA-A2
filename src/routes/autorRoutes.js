const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.post('/', autorController.createAutor);
router.get('/', autorController.getAutores);
router.get('/:id', autorController.getAutorById);
router.put('/:id', autorController.updateAutor);
router.delete('/:id', autorController.deleteAutor);

module.exports = router;
