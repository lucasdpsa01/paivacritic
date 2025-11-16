const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false,
});


sequelize.authenticate()
    .then(() => console.log("🔗 Conexão com o banco de dados estabelecida"))
    .catch(err => console.error("❌ Erro ao conectar no banco:", err));

module.exports = sequelize;
