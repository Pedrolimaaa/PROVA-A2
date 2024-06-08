const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const autorRoutes = require('./routes/autorRoutes'); // Importe as rotas do autor
const categoriaRoutes = require('./routes/categoriaRoutes'); // Importe as rotas da categoria
const emprestimoRoutes = require('./routes/emprestimoRoutes'); // Importe as rotas do empréstimo
const userRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/autores', autorRoutes); // Use as rotas do autor
app.use('/api/categorias', categoriaRoutes); // Use as rotas da categoria
app.use('/api/emprestimos', emprestimoRoutes); // Use as rotas do empréstimo
app.use('/api/users', userRoutes);
app.use('/api/livros', livroRoutes);

const DBConnect = require('./database/connection');
DBConnect();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});