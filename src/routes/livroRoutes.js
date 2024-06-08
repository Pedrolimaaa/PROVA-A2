const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
const auth = require('../middleware/auth');

router.post('/', auth, livroController.createLivro);
router.get('/', auth, livroController.getLivros);
router.get('/:id', auth, livroController.getLivroById);
router.put('/:id', auth, livroController.updateLivro);
router.delete('/:id', auth, livroController.deleteLivro);

module.exports = router;
