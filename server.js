const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/admins', require('./routes/api/admins'));

// Connect to the port
const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`server started on ${PORT}`));