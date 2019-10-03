const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/pessoas', require('./routes/api/pessoas'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));