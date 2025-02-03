<<<<<<< HEAD
const sequelize = require('../config/db');
const datatype = require('sequelize');

const Sugestao = sequelize.define('Sugestao', {
    id: {
        type:datatype.INTEGER,
=======
const Sequelize = require('sequelize');
const database = require('../config/db');

const Sugestao = database.define('sugestao', {
    id: {
        type:Sequelize.INTEGER,
>>>>>>> main
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome: {
<<<<<<< HEAD
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
=======
        type: Sequelize.STRING,
        allowNull: false
    },
    sugestao: Sequelize.STRING
})

module.exports = Sugestao
>>>>>>> main
