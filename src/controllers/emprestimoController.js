const Emprestimo = require('../models/emprestimo');

// Criar novo empréstimo
exports.createEmprestimo = async (req, res) => {
  try {
    const novoEmprestimo = new Emprestimo(req.body);
    await novoEmprestimo.save();
    res.status(201).json(novoEmprestimo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todos os empréstimos
exports.getEmprestimos = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.find();
    res.status(200).json(emprestimos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter empréstimo por ID
exports.getEmprestimoById = async (req, res) => {
  try {
    const { id } = req.params;
    const emprestimo = await Emprestimo.findById(id);
    if (!emprestimo) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json(emprestimo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar empréstimo por ID
exports.updateEmprestimo = async (req, res) => {
  try {
    const { id } = req.params;
    const { dataDevolucao } = req.body;

    // Verificar se o empréstimo existe
    const emprestimo = await Emprestimo.findById(id);
    if (!emprestimo) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }

    // Atualizar a data de devolução do empréstimo
    emprestimo.dataDevolucao = dataDevolucao;
    await emprestimo.save();

    res.status(200).json({ message: 'Empréstimo atualizado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar empréstimo por ID
exports.deleteEmprestimo = async (req, res) => {
  try {
    const { id } = req.params;
    const emprestimo = await Emprestimo.findByIdAndDelete(id);
    if (!emprestimo) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json({ message: 'Empréstimo deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
