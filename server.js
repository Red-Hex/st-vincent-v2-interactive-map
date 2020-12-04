const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors());

// Connect to the database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/admins', require('./routes/api/admins'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

// Connect to the port
const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`server started on ${PORT}`));