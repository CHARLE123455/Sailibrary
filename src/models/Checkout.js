const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Checkout = db.define('Checkout', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    checkoutDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    returned:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    returnDate:{
        type: DataTypes.DATE,
        allowNull: true
    }
   
});

Sequelize.sync()
    .then(() => {
        console.log('Checkout table created successfully');
    })
    .catch((err) => {
        console.log('Error creating Checkout table', err);
    });

module.exports = Checkout;