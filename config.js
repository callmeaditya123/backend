const { Sequelize } = require('sequelize');

// Konfigurasi database 
const sequelize = new Sequelize('Project_shakingago', 'Project_shakingago', 'fb1964579acb14a63cc8b3f35cb02673ae14c4a1',{
    host: '0sycy.h.filess.io',
    dialect: 'mysql',
    port: '3307',
    dialectModule: require('mysql2'),
    pool: {
        max: 5, // Maksimal koneksi aktif
        min: 0, // Minimal koneksi aktif
        acquire: 30000, // Waktu maksimal (dalam ms) untuk memperoleh koneksi sebelum timeout
        idle: 10000, // Waktu koneksi idle sebelum dilepaskan (dalam ms)
    },

});

module.exports = sequelize;