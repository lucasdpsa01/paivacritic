const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const jogoRoutes = require('./routes/jogos')
const sugestaoRoutes = require('./routes/sugestao');
const userRoutes = require('./routes/user');

const Jogo = require('./models/jogos');
const Sugestao = require('./models/sugestao');
const User = require('./models/user');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Importando rotas
app.use('/sugestao', sugestaoRoutes);
app.use('/', jogoRoutes);

// Sincroniza o banco de dados
sequelize.sync({ alter: true })
    .then(() => console.log("✅ Banco de dados sincronizado"))
    .catch(error => console.error("❌ Erro ao sincronizar BD:", error));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});