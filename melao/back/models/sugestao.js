const { DataTypes } = require('sequelize');
const database = require('../config/db');

const Sugestao = database.define('Sugestao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recomendacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true, // Cria campos createdAt e updatedAt automaticamente
    tableName: 'sugestoes' // Define o nome da tabela no banco
});

module.exports = Sugestao;
