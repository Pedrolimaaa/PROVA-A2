const Autor = require('../models/autor');

exports.createAutor = async (req, res) => {
  try {
    const { nome, nacionalidade } = req.body;
    const newAutor = new Autor({ nome, nacionalidade });
    await newAutor.save();
    res.status(201).json({ message: 'Autor registrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAutores = async (req, res) => {
  try {
    const autores = await Autor.find();
    res.status(200).json(autores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const { nome, nacionalidade } = req.body;
    const autor = await Autor.findByIdAndUpdate(req.params.id, { nome, nacionalidade }, { new: true });
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Autor deletado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
