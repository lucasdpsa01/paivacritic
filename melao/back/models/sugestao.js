const Sequelize = require('sequelize');
const database = require('../config/db');

const Sugestao = database.define('sugestao', {
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
    sugestao: Sequelize.STRING
})

module.exports = Sugestao