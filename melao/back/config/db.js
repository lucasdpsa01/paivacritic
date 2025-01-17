const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'ldps2801', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

module.exports = sequelize;