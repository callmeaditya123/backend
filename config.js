const { Sequelize } = require('sequelize');

// Konfigurasi database 
const sequelize = new Sequelize('db_project', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;