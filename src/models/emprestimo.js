const mongoose = require('mongoose');

const emprestimoSchema = new mongoose.Schema({
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Livro',
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  dataEmprestimo: {
    type: Date,
    required: true
  },
  dataDevolucao: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Emprestimo', emprestimoSchema);
