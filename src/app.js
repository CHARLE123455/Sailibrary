require('dotenv').config();
const cors = require('cors');
const express = require('express');
const sequelize = require('./config/database');

// routes
const BookRoutes = require('./routes/BookRoutes');

// initialize application
const app = express();
app.use(cors());
app.use(express.json());

// initialize API routes
app.use('/api/v1/books', BookRoutes);

// Sync Database and Start the Application
sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});