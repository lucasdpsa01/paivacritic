const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Jogo = sequelize.define('Jogos', {
    id_jogo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_jogo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    rating: {
        type: DataTypes.NUMERIC(5, 2),
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: true,
    tableName: 'jogos'
});

module.exports = Jogo;