const { DataTypes } = require('sequelize');
const sequelise = require('../config/db')

const User = sequelise.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_user: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email : {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password : {
        type: DataTypes.STRING(60),
        allowNull: false
    }
})

module.exports = User;