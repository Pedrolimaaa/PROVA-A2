const Categoria = require('../models/categoria');

exports.createCategoria = async (req, res) => {
  try {
    const { nome } = req.body;
    const newCategoria = new Categoria({ nome });
    await newCategoria.save();
    res.status(201).json({ message: 'Categoria registrada com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const { nome } = req.body;
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, { nome }, { new: true });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Categoria deletada com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
