const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor', required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  anoPublicacao: { type: Number, required: true },
  status: { type: String, default: 'Disponível' }
});

module.exports = mongoose.model('Livro', livroSchema);
