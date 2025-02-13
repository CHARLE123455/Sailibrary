const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Book = db.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    stockedQuantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    checkedOutQuantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

db.sync()
    .then(() => {
        console.log('Book table created successfully');
    })
    .catch((err) => {
        console.log('Error creating Book table', err);
    });

module.exports = Book;