const sequelize = require('../config/db');
const datatype = require('sequelize');

const Sugestao = sequelize.define('Sugestao', {
    id: {
        type:datatype.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome: {
        type: datatype.STRING,
        allowNull: false
    },
    recomendacao: {
        type: datatype.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Sugestao;

//COMPLETO 23/01
