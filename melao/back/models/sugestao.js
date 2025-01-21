const Sequelize = require('sequelize');
const database = require('../config/db');

const sugestao = database.define('sugestao', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
});

module.exports = sugestao