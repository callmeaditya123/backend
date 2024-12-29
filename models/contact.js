const { DataTypes } = require('sequelize');
const sequelize = require('../config');


const Contact = sequelize.define('Contact',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,  // createdAt dan updateAt
});

module.exports = Contact;