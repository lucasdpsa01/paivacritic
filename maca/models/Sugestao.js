const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/database');

const Sugestao = sequelize.define('Sugestao', {
    id_sugestao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sugestion: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    timestamps:true
});

module.exports = Sugestao;