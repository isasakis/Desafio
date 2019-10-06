const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use((req, res, next) => {
  req.io = io
  return next()
})

io.on('connection', function(socket){});

//Connect Database
connectDB();

app.use(cors())

//Init Middleware
app.use(express.json({ extended: false }));


// Define routes
app.use('/api/pessoas', require('./routes/api/pessoas'));

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
