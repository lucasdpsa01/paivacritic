const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'ldps2801', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;