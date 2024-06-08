const Livro = require('../models/livro');

// Criar novo livro
exports.createLivro = async (req, res) => {
  try {
    const newLivro = new Livro(req.body);
    await newLivro.save();
    res.status(201).json(newLivro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar todos os livros
exports.getLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar livro por ID
exports.getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar livro
exports.updateLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar livro
exports.deleteLivro = async (req, res) => {
  try {
    await Livro.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Livro deletado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
